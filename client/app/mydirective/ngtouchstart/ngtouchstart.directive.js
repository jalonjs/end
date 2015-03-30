'use strict';

angular.module('endApp')
  .directive('ngTouchstart', function () {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.on('touchstart', function(event) {
          scope.$apply(function() {
            scope.$eval(attrs.ngTouchstart);
          });
        });
      }
    };
  });
