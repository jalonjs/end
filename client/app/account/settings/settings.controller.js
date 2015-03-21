'use strict';

angular.module('endApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = '密码修改成功';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = '密码错误';
          $scope.message = '';
        });
      }
		};
  });
