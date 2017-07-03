angular
.module('groupProject')
.controller('PostsIndexCtrl', PostsIndexCtrl)
.controller('PostsNewCtrl', PostsNewCtrl)
.controller('PostsShowCtrl', PostsShowCtrl)
.controller('PostsEditCtrl', PostsEditCtrl);

PostsIndexCtrl.$inject = ['Post','filterFilter', '$scope'];
function PostsIndexCtrl(Post, filterFilter, $scope) {

  const vm = this;
  vm.delete = postsDelete;

  vm.all = Post.query();


  function postsDelete(post){

    Post.delete({ id: post._id })
    .$promise
    .then(() => {
      const index = vm.all.indexOf(post);
      vm.all.splice(index, 1);
    });
  }


  function filterPosts() {
    vm.filtered = filterFilter(vm.all, vm.q);
  }

  $scope.$watch(() => vm.q, filterPosts);

}



PostsShowCtrl.$inject = ['$state', 'Post'];
function PostsShowCtrl($state, Post) {
  const vm = this;

  vm.post = Post.get($state.params);
}




PostsNewCtrl.$inject = ['$state', 'Post'];
function PostsNewCtrl($state, Post) {
  const vm  = this;
  vm.create = postsCreate;

  function postsCreate(){
    Post
    .save(vm.post)
    .$promise
    .then(() => {
      $state.go('postsIndex');
    });
  }
}



// PostsShowCtrl.$inject = ['Post', '$stateParams', '$state'];
// function PostsShowCtrl(Post, $stateParams, $state) {
//   const vm = this;
//
//   vm.post = Post.get($stateParams);
//   console.log(vm.post);
//   function postsDelete() {
//     vm.post
//       .$remove()
//       .then(() => $state.go('postsIndex'));
//   }
//
//   vm.delete = postsDelete;
// }

// PostsShowCtrl.$inject = ['Post', '$state'];
// function PostsShowCtrl(Post, $state) {
//   const vm = this;
//   vm.post = {};
//   console.log(vm.post);
//   postsShow();
//
//   function postsShow(){
//     vm.post = Post.get($state.params);
//   }
// }



PostsEditCtrl.$inject = ['$state', 'Post'];
function PostsEditCtrl($state, Post) {
  const vm = this;
  vm.post = {};
  vm.update = postsUpdate;

  postsShow();

  function postsShow(){
    Post
    .get($state.params)
    .$promise
    .then((post) => {
      vm.post = post;
    });
  }

  function postsUpdate(){
    Post
    .update($state.params, vm.post)
    .$promise
    .then(() => {
      $state.go('postsShow', $state.params);
    });
  }
}
