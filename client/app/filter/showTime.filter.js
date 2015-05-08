'use strict';

angular.module('endApp')
  .filter('showTime', function () {
    return function (input) {
      var date = new Date(input);
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    };
  });
