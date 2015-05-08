'use strict';

angular.module('endApp')
  .factory('openAPI', ['$http',
    function ($http) {
      return {
        openJoinSubmit: function (data) {
          return $http.post('/api/things/', data);
        }
      };
    }
  ]);
