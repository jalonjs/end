'use strict';

angular.module('endApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.review', {
        url: '/review',
        templateUrl: 'app/admin/review/review.html',
        controller: 'ReviewCtrl'
      });
  });
