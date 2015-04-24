'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.app', {
        url: '/app',
        templateUrl: 'app/admin/app/app.html',
        controller: 'AppCtrl'
      });
  });
