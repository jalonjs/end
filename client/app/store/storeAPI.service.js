'use strict';

angular.module('endApp')
  .factory('storeAPI', ['$http',
    function ($http) {
      return {
        getAllApps: function () {
          return $http.get('/api/apps/');
        },
        getAppList: function (kind) {
          return $http.get('/api/apps/kind/' + kind);
        },
        getAppById: function (id) {
          return $http.get('/api/apps/' + id);
        },
        getAppPopular: function() {
          return $http.get('/api/apps/kind/popular');
        }
      };
    }
  ]);
