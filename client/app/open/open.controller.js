'use strict';

angular.module('endApp')
  .controller('OpenCtrl', function ($scope) {

    $scope.cmdList = [{
      cmd:'up', handle:'上键 ↑'
    },{
      cmd:'down', handle:'下键 ↓'
    },{
      cmd:'left', handle:'左键 ←'
    },{
      cmd:'right', handle:'右键 →'
    },{
      cmd:'x', handle:'功能键 X'
    },{
      cmd:'y', handle:'功能键 Y'
    },{
      cmd:'z', handle:'功能键 Z'
    }];



  });
