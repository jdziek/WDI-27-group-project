const router = require('express').Router();
const postsController = require('../controllers/posts');

router.route('/posts')
.get(postsController.index)
.post(postsController.create);

router.route('/post/:id')
.get(postsController.show)
.put(postsController.update)
.delete(postsController.delete);


module.exports = router;
