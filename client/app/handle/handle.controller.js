'use strict';

angular.module('endApp')
  .controller('HandleCtrl', function ($scope) {

    //  更改标题
    document.title = 'End 手柄';

    //  禁止滚动
    document.addEventListener('touchmove', function(event) {
      if(event.target.type == 'range') return;
      event.preventDefault();
    });

    //  游戏手柄 game


  });
