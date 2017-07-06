const mongoose = require('mongoose');
const timeAgo = require('time_ago_in_words');

const commentSchema = new mongoose.Schema({
  rating: { type: Number },
  text: { type: String, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

}, {
  timestamps: true
});

commentSchema
.virtual('timeAgo')
  .get(function getImageSRC() {
    return timeAgo(this.createdAt);
  });


const postSchema = new mongoose.Schema({

  postType: {type: String, required: true},
  title: {type: String, required: true},
  info: {type: String, required: true},
  location: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  coordinates: { lat: Number, lng: Number},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  geo: { lat: Number, lng: Number },
  comments: [ commentSchema ]
}, {
  timestamps: true
});
postSchema
.virtual('timeAgo')
  .get(function getImageSRC() {
    return timeAgo(this.createdAt);
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
