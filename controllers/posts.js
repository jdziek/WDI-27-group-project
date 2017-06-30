const Post = require('../models/post');

function postIndex(req, res, next) {
  Post
    .find()
    .exec()
    .then(posts => res.status(201).json(posts))
    .catch(next);
}

function postCreate(req, res, next) {
  Post
    .create(req.body)
    .then(post => res.status(201).json(post))
    .catch(next);
}

function postShow(req, res, next) {
  Post
    .findById(req.params.id)
    .then(post => res.status(201).json(post))
    .catch(next);
}

function postUpdate(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      for(const field in req.body) {
        post[field] = req.body[field];
      }
      return post.save();
    })
    .then((post) => res.json(post))
    .catch(next);
}

function postDelete(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      return post.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: postIndex,
  create: postCreate,
  show: postShow,
  update: postUpdate,
  delete: postDelete
};
