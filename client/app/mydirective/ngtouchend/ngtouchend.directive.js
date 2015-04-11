'use strict';

angular.module('endApp')
  .directive('ngTouchend', function () {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.on('touchend', function(event) {
          scope.$apply(function() {
            scope.$eval(attrs.ngTouchend);
          });
        });
      }
    };
  });
