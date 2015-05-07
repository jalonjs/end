'use strict';

angular.module('endApp')
  .controller('AppCtrl', ['$scope', 'appAPI', 'Modal', function ($scope, appAPI, Modal) {

    //  显示所有app
    appAPI.getAllApps().success(function (data) {
      $scope.apps = data;
    });

    //  添加app
    $scope.appAdd = function () {
      var appAddModal = Modal.confirm.appAdd();
      appAddModal(function (app, cb) {
        appAPI.appAddSubmit(app).success(function (res) {
          console.log(res);
          cb();  //  收起modal
        });
      });
    };

    //  删除某个app
    $scope.appDelete = function(app) {
      appAPI.deleteAppById(app._id).success(function () {
        angular.forEach($scope.apps, function(a, i) {
          if (a === app) {
            $scope.apps.splice(i, 1);
          }
        });
      });

    };

    //  把app设为推荐app
    $scope.appPopular = function(app) {
      app.popular = !app.popular;
      appAPI.popularAppById(app).success(function () {
        
      });

    };

  }]);
