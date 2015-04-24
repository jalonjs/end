'use strict';

angular.module('endApp')
  .factory('appAPI', ['$http',
    function ($http) {
      return {
        getAllApps: function () {
          return $http.get('/api/apps/');
        },
        getAppListByKind: function (kind) {
          return $http.get('/api/apps/kind/' + kind);
        },
        getAppById: function (id) {
          return $http.get('/api/apps/' + id);
        },
        deleteAppById: function (id) {
          return $http.get('/api/apps/delete/' + id);
        }
      };
    }
  ]);