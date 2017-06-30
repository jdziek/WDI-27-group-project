function secureRoute(req, res, next) {
  if(!req.session.isLoggedIn || !req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('alert', 'You must be logged in');
      return res.redirect('/login');
    });
  }
  next();
}

module.exports = secureRoute;
