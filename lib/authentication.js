// const User = require('../models/user');
//
// function authentication(req, res, next) {
//   if(!req.session.authenticated) return next();
//
//   User
//     .findById(req.session.userId)
//     .then((user) => {
//       if(!user) {
//         return req.session.regenerate(() => {
//           req.flash('danger', 'You must be logged in');
//           return res.redirect('/login');
//         });
//       }
//
//       req.session.userId = user.id;
//
//       req.user = user;
//
//       res.locals.user = user;
//       res.locals.authenticated = true;
//
//       next();
//     })
//     .catch(next);
// }
//
// module.exports = authentication;
