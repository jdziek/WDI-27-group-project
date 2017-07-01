const router = require('express').Router();
const postsController = require('../controllers/posts');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');
const users = require('../controllers/users');
const imageUpload = require('../lib/imageUpload');

router.route('/posts')
.get(postsController.index)
.post(postsController.create);

router.route('/post/:id')
.all(secureRoute)
.get(postsController.show)
.put(postsController.update)
.delete(postsController.delete);

router.route('/register')
.post(imageUpload, auth.register);

router.route('/login')
.post(auth.login);

router.route('/oauth/facebook')
.post(oauth.facebook);

router.route('/users/:id')
.get(users.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
