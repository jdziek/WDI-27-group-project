const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String },
  tags: { type: String},
  // location: {Number}
  time: { type: Number},
  why: { type: String}

}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
