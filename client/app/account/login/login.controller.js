'use strict';

angular.module('endApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $rootScope, userAPI) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/settings');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
