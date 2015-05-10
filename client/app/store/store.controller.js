'use strict';

angular.module('endApp')
  .controller('StoreCtrl', ['$scope', '$stateParams', 'storeAPI', function ($scope, $stateParams, storeAPI) {

    //  商店菜单的列表数据
    $scope.storeMenuList = [{
      name: '推荐',
      kind: 'popular'
    },{
      name: '游戏',
      kind: 'game'
    },{
      name: '办公',
      kind: 'office'
    },{
      name: '媒体',
      kind: 'media'
    },{
      name: '其他',
      kind: 'other'
    }];

    //  菜单对应的应用的列表数据
    $scope.kind = $stateParams.kind;
    if(!$scope.kind || $scope.kind == 'popular') {
      $scope.kind = 'popular';
      storeAPI.getAppPopular().success(function(list) {
        $scope.storeAppList = list;
      });
    }else {
      storeAPI.getAppList($scope.kind).success(function(list) {
        $scope.storeAppList = list;
      });
    }


  }]);
