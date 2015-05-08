'use strict';

angular.module('endApp')
  .controller('ReviewCtrl', ['$scope', 'reviewAPI', 'Modal', function ($scope, reviewAPI, Modal) {

    //  显示所有待审查app信息
    reviewAPI.getReviewApps().success(function (data) {
      $scope.apps = data;
    });

    //  测试通过与取消  这是标记
    $scope.reviewAppPass = function (app) {
      app.ok = !app.ok;
      reviewAPI.reviewAppPass(app).success(function (data) {

      });
    };

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


  }]);
