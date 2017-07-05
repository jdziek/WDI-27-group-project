angular
  .module('groupProject')
  .factory('User', User)
  .factory('UserComment', UserComment);
    // .factory('UserEdit', UserEdit);

User.$inject = ['$resource'];
function User($resource) {
  return new $resource('/api/users/:id', { id: '@id' });
}

UserComment.$inject = [ '$resource'];
function UserComment($resource) {
  return new $resource('/api/users/:userId/comments/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}

// UserEdit.$inject = [ '$resource'];
// function UserEdit($resource) {
//   return $resource('/api/users/:id/edit', { id: '@id' }, {
//     update: { method: 'PUT' }
//   });
// }
