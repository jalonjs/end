'use strict';

angular.module('endApp')
  .factory('storeAPI', ['$http',
    function ($http) {
      return {
        getAppList: function (kind) {
          return $http.get('/api/apps/kind/' + kind);
        }
      };
    }
  ]);
