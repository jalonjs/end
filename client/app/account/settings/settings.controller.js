'use strict';

angular.module('endApp')
  .controller('SettingsCtrl', ['$scope', 'User', 'Auth', 'reviewAPI', 'userAPI', '$rootScope',
    function ($scope, User, Auth, reviewAPI, userAPI, $rootScope) {
      $scope.errors = {};

      //  我的app
      userAPI.getMe().success(function (me) {
        $rootScope.me = me;
        reviewAPI.getAppByUserId($rootScope.me._id).success(function (res) {
          $scope.apps = res;
        });
      });

      //  删除
      $scope.reviewAppDelete = function (app) {
        reviewAPI.reviewAppDelete(app).success(function (data) {
          angular.forEach($scope.apps, function(u, i) {
            if (u === app) {
              $scope.apps.splice(i, 1);
            }
          });
        });
      };


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


  }]);
