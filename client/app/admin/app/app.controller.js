'use strict';

angular.module('endApp')
  .controller('AppCtrl', ['$scope', 'appAPI', 'Modal', function ($scope, appAPI, Modal) {

    appAPI.getAllApps().success(function (data) {
      $scope.apps = data;

    });



    //  删除某个app
    $scope.delete = function(app) {
      appAPI.deleteAppById(app._id).success(function () {
        angular.forEach($scope.apps, function(a, i) {
          if (a === app) {
            $scope.apps.splice(i, 1);
          }
        });
      });

    };

  }]);
