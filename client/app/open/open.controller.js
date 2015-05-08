'use strict';

angular.module('endApp')
  .controller('OpenCtrl', ['$scope', 'Modal', 'openAPI', '$state', 'Auth', '$rootScope', 'userAPI',
    function ($scope, Modal, openAPI, $state, Auth, $rootScope, userAPI) {

      //  登录后才可以进入开放平台
      if(!Auth.isLoggedIn()) {
        $state.go('login');
      }else {
        userAPI.getMe().success(function (me) {
          $rootScope.me = me;
        });
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
      }];

      /*接入开放平台的弹出框*/
      $scope.openJoinData = {};
      $scope.showOpenJoinModal = function () {
        var openJoinModal = Modal.confirm.openJoin();
        openJoinModal(function (app, cd) {
          app.userId = $rootScope.me._id;
          openAPI.openJoinSubmit(app).success(function (res) {
            cd();
          });
        });
      };


  }]);
