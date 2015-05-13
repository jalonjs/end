'use strict';

angular.module('endApp')
  .controller('HandleCtrl', ['$scope', '$stateParams', 'socket', 'appAPI',
    function ($scope, $stateParams, socket, appAPI) {

      //  更改标题
      document.title = 'End 手柄';

      //  禁止滚动
      document.addEventListener('touchmove', function(event) {
        if(event.target.type == 'range') return;
        event.preventDefault();
      });

      //  游戏手柄 game 前端扫码访问成功后，通知服务器
      var uniqueId = $stateParams.uniqueId;
      var appId = $stateParams.id;

      //  自定义手柄，获得app对应的的cmd命令集
      $scope.keyCmd = [];
      $scope.isGame = true;

      appAPI.getAppById(appId).success(function (res) {

        //  判断手柄类型
        if(res.keyCmd) {
          var keyCmd = JSON.parse(res.keyCmd);
          $scope.isGame = keyCmd.length == 0;
          //  app
          if(!$scope.isGame) {
            $scope.keyCmd = keyCmd || [];
          }
        }

      });

      socket.socket.emit('handle:ok', uniqueId);

      //angular.element('.game').append('<audio id="touchAudio" ><source src="resource/notify.ogg" type="audio/ogg"><source src="resource/notify.mp3" type="audio/mpeg"> <source src="resource/notify.wav" type="audio/wav"> </audio>');

      //  按钮对应命令们
      $scope.cmdtouch = function (cmd) {
        var ucmd = {
          uid: uniqueId,
          cmd: cmd,
          time: new Date().getTime()
        };
        socket.socket.emit('handle:cmd', ucmd);

        if(cmd != 'touchend') {
          angular.element('#touchAudio')[0].play();
        }

      }



    }]);
