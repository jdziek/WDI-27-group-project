angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','$state','$auth', '$transitions'];
function MainCtrl($rootScope, $state, $auth, $transitions) {
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;

    if(err.status === 401) {
      vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  $transitions.onSuccess({}, (transition) => {
    vm.pageName = transition.$to().name;
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload()) vm.currentUserId = $auth.getPayload().userId;
    console.log(vm.currentUserId);
  });

  function logout() {
    $auth.logout();
    $state.go('login');
  }
  vm.logout = logout;
}
