'use strict';

angular.module('endApp')
  .factory('openAPI', ['$http',
    function ($http) {
      return {
        openJoinSubmit: function () {
          return $http.post('/api/apps/');
        }
      };
    }
  ]);
