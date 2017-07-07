
const facebook = {
  loginUrl: 'https://www.facebook.com/v2.9/dialog/oauth',
  accessTokenUrl: 'https://graph.facebook.com/v2.9/oauth/access_token',
  clientId: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  redirectUri: process.env.NODE_ENV === 'production'? 'https://our-awesome-app.herokuapp.com/' : 'http://localhost:7000/',
  responseCode: 'code'
};
module.exports = {
  facebook
};
