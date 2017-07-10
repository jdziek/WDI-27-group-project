const Post = require('../models/post');

function postIndex(req, res, next) {


  Post
  .find()
  .populate('createdBy')
  .exec()
  .then(posts => res.status(201).json(posts))
  .catch(next);
}

function postCreate(req, res, next) {
  req.body.createdBy = req.user;
  Post
  .create(req.body)
  .then(post => res.status(201).json(post))
  .catch(next);
}

function postShow(req, res, next) {
  Post
  .findById(req.params.id)
  .populate('comments.createdBy createdBy')
  .exec()
  .then(post => res.status(201).json(post))
  .catch(next);
}

function postUpdate(req, res, next) {
  Post
  .findById(req.params.id)
  .exec()
  .then((post) => {
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


function addCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Post
  .findById(req.params.id)
  .exec()
  .then((postsController) => {
    if(!postsController) return res.notFound();

    const comment = postsController.comments.create(req.body);
    postsController.comments.push(comment);

    return postsController.save()
    .then(() => res.json(comment));
  })
  .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Post
  .findById(req.params.id)
  .exec()
  .then((postsController) => {
    if(!postsController) return res.notFound();

    const comment = postsController.comments.id(req.params.commentId);
    comment.remove();

    return postsController.save();
  })
  .then(() => res.status(204).end())
  .catch(next);
}



module.exports = {
  index: postIndex,
  create: postCreate,
  show: postShow,
  update: postUpdate,
  delete: postDelete,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
