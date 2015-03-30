'use strict';

angular.module('endApp')
  .controller('BoxCtrl', ['$scope', 'storeAPI', '$stateParams', '$sce', 'socket',
    function ($scope, storeAPI, $stateParams, $sce, socket) {
      //  更改title
      document.title = 'End盒子——用手机做你的随身手柄';

      var myHost = 'http://192.168.1.106:1643';
      //  二维码， app
      $scope.maskShow = true;  //  显示遮罩及二维码

      var appId = $stateParams.id;
      var uniqueId = new Date().getTime() * Math.random();
      $scope.appUrl = null;
      $scope.qrcodeUrl = 'http://' + myHost;

      //  通过id再次拿到这个app对应的地址，放到iframe里，以及获得她对应的二维码地址，生成二维码。
      storeAPI.getAppById(appId).success(function (app) {
        //$scope.appUrl = $sce.trustAsResourceUrl(app.appUrl);
        $scope.appUrl = $sce.trustAsResourceUrl('http://localhost/enddemo');
        $scope.qrcodeUrl = myHost + '/handle/' + uniqueId + '/type/' + (app.handleId || '1');
      });

      //  手柄加载成功后，去除二维码遮罩层
      socket.socket.on('box:' + uniqueId + ':mask:hide', function () {
        $scope.maskShow = false;  //  隐藏遮罩及二维码
      });

      //  命令
      socket.socket.on('box:' + uniqueId + ':cmd', function (cmd) {
        console.log(cmd);
        //  postMessage to frame
        var iframeWin = document.getElementById("appPage").contentWindow;
        iframeWin.postMessage(cmd, '*');

      });

  }]);
