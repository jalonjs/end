'use strict';

angular.module('endApp')
  .controller('AppCtrl', ['$scope', 'appAPI', 'Modal', '$rootScope', 'userAPI', function ($scope, appAPI, Modal, $rootScope, userAPI) {

    // me
    userAPI.getMe().success(function (me) {
      $rootScope.me = me;
    });

    //  显示所有app
    appAPI.getAllApps().success(function (data) {
      $scope.apps = data;
    });

    //  添加app
    $scope.appAdd = function () {
      var data = {
        developer: $rootScope.me.name
      };
      var appAddModal = Modal.confirm.appAdd();
      appAddModal(function (app, cb) {
        appAPI.appAddSubmit(app).success(function (res) {
          $scope.apps.unshift(res);
          cb();  //  收起modal
        });
      }, data);
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
