const router = require('express').Router();
const postsController = require('../controllers/posts');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/posts')
.get(postsController.index)
.post(postsController.create);

router.route('/post/:id')
.all(secureRoute)
.get(postsController.show)
.put(postsController.update)
.delete(postsController.delete);

router.route('/register')
.post(auth.register);

router.route('/login')
.post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
