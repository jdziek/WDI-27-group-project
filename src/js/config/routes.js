angular
.module('groupProject')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('postsIndex', {
    url: '/',
    templateUrl: 'js/views/posts/index.html',
    controller: 'PostsIndexCtrl as postsIndex'
  })
  .state('postsNew', {
    url: '/posts/new',
    templateUrl: 'js/views/posts/new.html',
    controller: 'PostsNewCtrl as postsNew'
  })
  .state('postsEdit', {
    url: '/posts/:id/edit',
    templateUrl: 'js/views/posts/edit.html',
    controller: 'PostsEditCtrl as postsEdit'
  })
  .state('postsShow', {
    url: '/posts/:id',
    templateUrl: 'js/views/posts/show.html',
    controller: 'PostsShowCtrl as postsShow'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/auth/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/auth/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: 'js/views/auth/profile.html',
    controller: 'ProfileCtrl as profile'
  });


  $urlRouterProvider.otherwise('/');

}
