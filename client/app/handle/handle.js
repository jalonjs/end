'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('handle', {
        url: '/handle/:uniqueId/id/:id',
        templateUrl: 'app/handle/handle.html',
        controller: 'HandleCtrl'
      });
  });
