'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('box', {
        url: '/box/play/:id',
        templateUrl: 'app/box/box.html',
        controller: 'BoxCtrl'
      });
  });
