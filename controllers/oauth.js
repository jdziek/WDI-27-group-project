const rp          = require('request-promise');
const oauth       = require('../config/oauth');
const User        = require('../models/user');
const jwt         = require('jsonwebtoken');
const { secret }  = require('../config/environment');


function facebook(req, res, next) {
  return rp({
    method: 'POST',
    url: oauth.facebook.accessTokenUrl,
    qs: {
      client_id: oauth.facebook.clientId,
      redirect_uri: oauth.facebook.redirectUri,
      client_secret: oauth.facebook.clientSecret,
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    console.log(token);
    return rp({
      method: 'GET',
      url: 'https://graph.facebook.com/v2.5/me?fields=name,email,gender,age_range,picture.height(600)',
      qs: {
        access_token: token.access_token
      },
      json: true
    })
    .then((profile) => {
      console.log('User profile', profile);
      return User
      .findOne( {$or: [{ email: profile.email}, {facebookId: profile.id}] })
      .then((user) => {
        if(!user) {
          user = new User({
            username: profile.name,
            email: profile.email,
            image: profile.picture.data.url,
            gender: profile.gender,
            age_range: profile.age
          });
        }
        user.facebookId = profile.id;
        console.log('User', user);
        return user.save();
      });
    })
    .then((user) => {
      // use JWT
      console.log(user);
      // Create a JWT token and send it back to the Angular app
      const payload = { userId: user.id };
      const token = jwt.sign(payload, secret, { expiresIn: '1hr' });

      return res.json({
        token,
        message: `Welcome back ${user.username}`
      });
    })
    .catch(next);
  });
}


module.exports = {
  facebook
};
