'use strict';

angular.module('endApp')
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/store/', '/store/popular');
    $stateProvider
      .state('store', {
        url: '/store/:kind',
        templateUrl: 'app/store/store.html',
        controller: 'StoreCtrl'
      });

  });
