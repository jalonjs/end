'use strict';

angular.module('endApp')
  .controller('ReviewCtrl', ['$scope', 'reviewAPI', 'Modal', 'appAPI', function ($scope, reviewAPI, Modal, appAPI) {

    //  显示所有待审查app信息
    reviewAPI.getReviewApps().success(function (data) {
      $scope.apps = data;
    });

    //  测试通过与取消  这是标记
    $scope.reviewAppPass = function (app) {
      var data = {
        name: app.appName || '',
        introduction: app.appIntroduction || '',
        url: app.appUrl || '',
        cover: app.appCover || ''
      };

      if(!app.ok) {
        var appAddModal = Modal.confirm.appAdd();
        appAddModal(function ok(data, cb) {
          appAPI.appAddSubmit(data).success(function (res) {
            cb();  //  收起modal

            //  改变按钮状态
            app.ok = !app.ok;
            reviewAPI.reviewAppPass(app).success(function (data) {
            });
          });
        }, data);

      }



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
