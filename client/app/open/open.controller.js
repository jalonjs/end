'use strict';

angular.module('endApp')
  .controller('OpenCtrl', ['$scope', 'Modal', 'openAPI', function ($scope, Modal, openAPI) {

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
      openJoinModal(function () {

        openAPI.openJoinSubmit();
      });
    };


  }]);
