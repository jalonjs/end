'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('open', {
        url: '/open',
        templateUrl: 'app/open/open.html',
        controller: 'OpenCtrl'
      });
  });