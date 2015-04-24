'use strict';

angular.module('endApp')
  .factory('userAPI', ['$http',
    function ($http) {
      return {
        getAllusers: function () {
          return $http.get('/api/users/');
        }
      };
    }
  ]);
