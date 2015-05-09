'use strict';

angular.module('endApp')
  .filter('showTime', function () {
    return function (input) {
      var date = new Date(input);
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    };
  });
