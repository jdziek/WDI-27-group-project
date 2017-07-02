const User = require('../models/user');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      res.json(user);
    })
    .catch(next);
}

// function updateRoute(req, res, next) {
//   User
//     .findById(req.params.id)
//     .exec()
//     .then((user) => {
//       if(!user) return res.notFound();
//
//       for(const field in req.body) {
//         user[field] = req.body[field];
//       }
//       return user.save();
//     })
//     .then((user) => res.json(user))
//     .catch(next);
// }

module.exports = {
  show: showRoute
  // update: updateRoute
};
