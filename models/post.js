const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  postType: String,
  title: String,
  info: String,
  location: String,
  date: String,
  time: Number,
  image: String,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

postSchema
.virtual('imageSRC')
.get(function getImageSRC() {
  if(!this.image) return null;
  if(this.image.match(/^http/)) return this.image;
  return `https://s3-eu-west-1.amazonaws.com/wdi-27-london-new/${this.image}`;
});

postSchema.methods.belongsTo = function postBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};




module.exports = mongoose.model('Post', postSchema);
