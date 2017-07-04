angular
.module('groupProject')
.controller('ProfileCtrl', ProfileCtrl)
.controller('EditProfileCtrl', EditProfileCtrl);

ProfileCtrl.$inject = ['$auth', 'User', '$state', 'UserComment'];
function ProfileCtrl($auth, User, $state, UserComment) {
  const vm = this;

  vm.user = User.get($state.params);

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

EditProfileCtrl.$inject = ['$auth', 'User', '$state'];
function EditProfileCtrl($auth, User, $state) {
  const vm = this;
  vm.user = {};
  vm.update = userUpdate;

  userShow();

  function userShow(){
    User
    .get($state.params)
    .$promise
    .then((user) => {
      vm.user = user;
    });
  }

  function userUpdate(){
    User
    .update($state.params, vm.post)
    .$promise
    .then(() => {
      $state.go('userShow', $state.params);
    });
  }

}
