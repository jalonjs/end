'use strict';

angular.module('endApp')
  .controller('BoxCtrl', ['$scope', 'storeAPI', '$stateParams', '$sce', 'socket',
    function ($scope, storeAPI, $stateParams, $sce, socket) {
      //  更改title
      document.title = 'End盒子——用手机做你的随身手柄';

      //  二维码， app
      $scope.maskShow = true;  //  显示遮罩及二维码

      var id = $stateParams.id;
      $scope.appUrl = null;
      $scope.qrcodeUrl = 'http://' + location.host;

      //  通过id再次拿到这个app对应的地址，放到iframe里，以及获得她对应的二维码地址，生成二维码。
      storeAPI.getAppById(id).success(function (app) {
        $scope.appUrl = $sce.trustAsResourceUrl(app.appUrl);
        $scope.qrcodeUrl = 'http://' + location.host + '/handle/' + app._id + '/type/' + (app.handleId || '1');
      });

      //socket.socket.on('handle:ok', function () {
      //  $scope.maskShow = false;  //  隐藏遮罩及二维码
      //});

  }]);
