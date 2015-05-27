'use strict';

angular.module('endApp')
  .controller('OpenCtrl', ['$scope', 'Modal', 'openAPI', '$state', 'Auth', '$rootScope', 'userAPI',
    function ($scope, Modal, openAPI, $state, Auth, $rootScope, userAPI) {

      //  登录后才可以进入开放平台
      if(!Auth.isLoggedIn()) {
        $state.go('login');
      }else {
        //  得到我的信息
        userAPI.getMe().success(function (me) {
          $rootScope.me = me;
        });

        ////  默认生成一组我提交的申请
        //var thing = {
        //  "createdAt": new Date(),
        //  "contact": "QQ 824525504",
        //  "nickname": "admin",
        //  "appName": "太空大战",
        //  "appIntroduction": "这是一款html5网页游戏，玩家通过手机扫描二维码，即可使用对应的游戏手柄，进行愉快玩耍。",
        //  "appUrl": "http://localhost/game/spacewar",
        //  "appCover": "http://localhost:1643/assets/images/spacewar.png",
        //  "userId": $rootScope.me._id,
        //  "ok": false
        //};
        //
        //openAPI.openJoinSubmit(thing).success(function (res) {
        //});

      }


      $scope.cmdList = [{
        cmd:'up', handle:'上键 ↑'
      },{
        cmd:'down', handle:'下键 ↓'
      },{
        cmd:'left', handle:'左键 ←'
      },{
        cmd:'right', handle:'右键 →'
      },{
        cmd:'x', handle:'功能键 X'
      },{
        cmd:'y', handle:'功能键 Y'
      },{
        cmd:'z', handle:'功能键 Z'
      },{
        cmd:'touchend', handle:'手指离开按键'
      },{
        cmd:'start', handle:'开始'
      },{
        cmd:'pause', handle:'暂停'
      },{
        cmd:'refresh', handle:'刷新'
      }];

      /*接入开放平台的弹出框*/
      $scope.openJoinData = {};
      $scope.showOpenJoinModal = function () {
        var openJoinModal = Modal.confirm.openJoin();
        openJoinModal(function (app, cd) {
          app.userId = $rootScope.me._id;
          app.developer = $rootScope.me.name;
          openAPI.openJoinSubmit(app).success(function (res) {
            cd();
          });
        });
      };


  }]);
