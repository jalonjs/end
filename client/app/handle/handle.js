'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('handle', {
        url: '/handle/:id',
        templateUrl: 'app/handle/game.html',
        controller: 'HandleCtrl'
      });
  });
