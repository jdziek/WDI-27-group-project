const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3= require('../lib/s3');
const timeAgo = require('time_ago_in_words');

const commentSchema = new mongoose.Schema({
  rating: { type: Number },
  text: { type: String, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

commentSchema
.virtual('timeAgo')
  .get(function getImageSRC() {
    return timeAgo(this.createdAt);
  });

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  image: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  postcode: { type: String },
  travelDistance: { type: Number },
  jobTitle: { type: String },
  bio: { type: String },
  facebookId: { type: Number },
  gender: {type: String},
  age: { type: Number },
  about: { type: String},
  work: { type: String },
  comments: [ commentSchema ]
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
    if(this.image.match(/^images/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/wdi-27-london-new/${this.image}`;
  });

userSchema
  .virtual('averageRating')
  .get(function getAverageRating() {
    const total = this.comments.reduce((acc, comment) => {
      return acc + comment.rating;
    }, 0);
    return total / this.comments.length;
  });

userSchema.pre('remove', function removeImage(next) {
  if(!this.image) return next();
  s3.deleteObject({ Key: this.image }, next);
});

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password')) {
    if(!this.password && !this.facebookId) {
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
