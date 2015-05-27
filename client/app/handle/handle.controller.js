'use strict';

angular.module('endApp')
  .controller('HandleCtrl', ['$scope', '$stateParams', 'socket', 'appAPI', 'reviewAPI',
    function ($scope, $stateParams, socket, appAPI, reviewAPI) {

      //  更改标题
      document.title = 'End 手柄';

      //  禁止滚动
      document.addEventListener('touchmove', function(event) {
        if(event.target.type == 'range') return;
        event.preventDefault();
      });

      //  游戏手柄 game 前端扫码访问成功后，通知服务器
      var status = $stateParams.status;
      var uniqueId = $stateParams.uniqueId;
      var appId = $stateParams.id;

      //  自定义手柄，获得app对应的的cmd命令集
      $scope.keyCmd = [];

      //  正式
      if(status == 'run') {
        appAPI.getAppById(appId).success(function (res) {

          //  判断手柄类型
          if(res.keyCmd) {
            var keyCmd = JSON.parse(res.keyCmd);
            //  如果没有keyCMD存在，则为app
            if(keyCmd.length != 0) {
              $scope.isGame = false;
              $scope.keyCmd = keyCmd || [];
            }else {
              $scope.isGame = true;
            }


            //  发送通知，让浏览器隐藏二维码遮罩层，游戏就隐藏遮罩层
            socket.socket.emit('handle:ok', {
              "uniqueId": uniqueId,
              "isGame": $scope.isGame
            });

          }

        });
      }else if(status == 'test') {
      //  测试
        reviewAPI.getAppById(appId).success(function (res) {

          //  判断手柄类型
          if(res.keyCmd) {
            var keyCmd = JSON.parse(res.keyCmd);
            //  如果没有keyCMD存在，则为app
            if(keyCmd.length != 0) {
              $scope.isGame = false;
              $scope.keyCmd = keyCmd || [];
            }

          }else {
            $scope.isGame = true;
          }

          //  发送通知，让浏览器隐藏二维码遮罩层，游戏就隐藏遮罩层
          socket.socket.emit('handle:ok', {
            "uniqueId": uniqueId,
            "isGame": $scope.isGame
          });

        });
      }



      //angular.element('.game').append('<audio id="touchAudio" ><source src="resource/notify.ogg" type="audio/ogg"><source src="resource/notify.mp3" type="audio/mpeg"> <source src="resource/notify.wav" type="audio/wav"> </audio>');

      //  按钮对应命令们
      localStorage.setItem('handleId', new Date().getTime());
      $scope.cmdtouch = function (cmd) {
        var ucmd = {
          uid: uniqueId,
          cmd: cmd,
          time: new Date().getTime(),
          handleId: localStorage.getItem('handleId')
        };
        socket.socket.emit('handle:cmd', ucmd);

        if(cmd != 'touchend') {
          angular.element('#touchAudio')[0].play();
        }

      }



    }]);
