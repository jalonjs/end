'use strict';

angular.module('endApp')
  .filter('appKindName', function () {
    return function (input) {
      switch (input) {
        case 'game':
          return '游戏';
          break;
        case 'office':
          return '办公';
          break;
        case 'media':
          return '媒体';
          break;
      }
    };
  });
