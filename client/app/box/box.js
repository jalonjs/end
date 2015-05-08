'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('box', {
        url: '/box/play/:status/:id', //status 测试：test 正式：run
        templateUrl: 'app/box/box.html',
        controller: 'BoxCtrl'
      });
  });
