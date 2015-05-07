'use strict';

angular.module('endApp')
  .controller('UserCtrl', ['$scope', 'userAPI', 'User', function ($scope, userAPI, User) {

    userAPI.getAllusers().success(function (data) {
      $scope.users = data;
    });

    //  删除某个用户
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

  }]);
