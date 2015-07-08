angular.module('starter.controllers', ['starter.services', 'ngOpenFB', 'ngSanitize'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, ngFB) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
      function (response) {
        if (response.status === 'connected') {
          console.log('succeeded');
          $scope.closeLogin();
        } else {
          alert('Facebook login failed');
        }
      });
  };
})

.controller('MoviesCtrl', function($scope, Movie) {
  $scope.movies = Movie.query();
})

.controller('MovieCtrl', function($scope, $stateParams, Movie, $sce) {
  console.log($stateParams);
  $scope.movie = Movie.get({movieId: $stateParams.movieId});
  
  $scope.trustSrc = function (src) {
    return $sce.trustAsResourceUrl(src);
  }

});
