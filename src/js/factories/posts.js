angular
.module('groupProject')
.factory('Post', Post)
.factory('PostComment', PostComment);

Post.$inject = ['$resource'];

function Post($resource) {
  return  new $resource('/api/posts/:id',{ id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}

PostComment.$inject = [ '$resource'];
function PostComment($resource) {
  return new $resource('/api/posts/:postId/comments/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
