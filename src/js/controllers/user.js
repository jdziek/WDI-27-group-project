angular
  .module('groupProject')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$auth', 'User', '$state', 'UserComment', '$stateParams'];
function ProfileCtrl($auth, User, $state, UserComment) {
  const vm = this;

  const { userId } = $auth.getPayload();

  if(userId) vm.user = User.get({ id: userId });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;

  vm.newComment = {};

  function addComment() {
    UserComment
    .save({ userId: vm.user.id }, vm.newComment)
    .$promise
    .then((comment) => {
      vm.user.comments.push(comment);
      vm.newComment = {};
    });
  }
  vm.addComment = addComment;

  function deleteComment(comment) {
    UserComment
      .delete({ userId: vm.user.id, id: comment.id })
      .$promise
      .then(() => {
        const index = vm.user.comments.indexOf(comment);
        vm.user.comments.splice(index, 1);
      });
  }
  vm.deleteComment = deleteComment;
}
