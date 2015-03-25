'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('handle', {
        url: '/handle/:id/type/:handleId',
        templateUrl: function ($stateParams) {
          switch ($stateParams.handleId) {
            //  游戏
            case '1':
                  return 'app/handle/game.html';
            break;
          }
        },
        controller: 'HandleCtrl'
      });
  });
