'use strict';

angular.module('endApp')
  .factory('reviewAPI', ['$http',
    function ($http) {
      return {
        getReviewApps: function () {
          return $http.get('/api/things/');
        },
        getAppById: function (id) {
          return $http.get('/api/things/' + id);
        },
        getAppByUserId: function (userId) {
          return $http.get('/api/things/user/' + userId);
        },
        //  审查通过，标示已通过
        reviewAppPass: function (app) {
          return $http.post('/api/things/pass/'+ app._id, app);
        },
        //  删除
        reviewAppDelete: function (app) {
          return $http.get('/api/things/remove/'+ app._id);
        }
      };
    }
  ]);
