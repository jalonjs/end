'use strict';

angular.module('endApp')
  .controller('StoreCtrl', function ($scope) {

    //  商店菜单的列表数据
    $scope.storeMenuList = [{
      name: '推荐',
      sref: 'store.recommend'
    },{
      name: '游戏',
      sref: 'store.game'
    },{
      name: '办公',
      sref: 'store.office'
    },{
      name: '媒体',
      sref: 'store.media'
    }];

    //  菜单对应的应用的列表数据
    $scope.storeAppList = [{
      id: 1,
      name: '跳高王',
      introduction: '这是一款html5网页游戏，玩家通过手机扫描二维码，即可使用对应的游戏手柄，进行愉快玩耍。',
      cover: '/assets/images/jump.png',
      sort: 'game'
    }];

  });
