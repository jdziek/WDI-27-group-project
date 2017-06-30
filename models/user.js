const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3= require('../lib/s3');

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  image: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  passwordConfirmation: { type: String },
  postcode: { type: String },
  travelDistance: { type: Number },
  jobTitle: { type: String },
  boi: { type: String }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/wdi-27-london-new/${this.image}`;
  });

userSchema.pre('remove', function removeImage(next) {
  if(!this.image) return next();
  s3.deleteObject({ Key: this.image }, next);
});

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password')) {
    if(!this.password && !this.instagramId) {
      this.invalidate('password', 'required');
    }

    if(this._passwordConfirmation && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  }
  next();

});

userSchema.pre('save', function checkPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
