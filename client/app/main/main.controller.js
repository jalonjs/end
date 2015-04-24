'use strict';

angular.module('endApp')
  .controller('MainCtrl', ['$scope', '$http', 'socket', 'storeAPI',
    function ($scope, $http, socket, storeAPI) {
      $scope.awesomeThings = [];

      storeAPI.getAppList('popular').success(function (list) {
        $scope.awesomeThings = list;
      });

      $scope.addThing = function() {
        if($scope.newThing === '') {
          return;
        }
        $http.post('/api/things', { name: $scope.newThing });
        $scope.newThing = '';
      };

      $scope.deleteThing = function(thing) {
        $http.delete('/api/things/' + thing._id);
      };

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
      });


  }]);
