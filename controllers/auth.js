const User = require('../models/user');
const { secret } = require('../config/environment');
const jwt = require('jsonwebtoken');

function register(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  User
  .create(req.body)
  .then((err) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json({ message: 'Thanks for registering!' });
  })

  .catch(next);
}

function login(req, res, next) {
  User
  .findOne({ email: req.body.email }, (err, user) => {
    if (err) res.send(500).json(err);
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = { userId: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });
    console.log('TOKEN:', token);
    return res.status(200).json({
      message: 'Login successful!',
      token
    });
  })
  .catch(next);
}

module.exports = {
  register,
  login
};
