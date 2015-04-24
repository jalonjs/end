/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var App = require('../api/app/app.model');

App.find({}).remove(function() {
  App.create({
    name: '太空大战',
    introduction: '这是一款html5网页游戏，玩家通过手机扫描二维码，即可使用对应的游戏手柄，进行愉快玩耍。',
    cover: '/assets/images/spacewar.png',
    kind: 'game'
  },{
    name: '全场投票',
    introduction: '适用于会场，演播间，会议室，教室等多种场合的多人投票应用。',
    cover: '/assets/images/pc.png',
    kind: 'media'
  },{
    name: '太空大战',
    introduction: '这是一款html5网页游戏，玩家通过手机扫描二维码，即可使用对应的游戏手柄，进行愉快玩耍。',
    cover: '/assets/images/spacewar.png',
    kind: 'popular'
  },{
    name: '全场投票',
    introduction: '适用于会场，演播间，会议室，教室等多种场合的多人投票应用。',
    cover: '/assets/images/pc.png',
    kind: 'popular'
  });
});

Thing.find({}).remove(function() {
  Thing.create({
    name : '太空大战',
    info : '这是一款html5网页游戏，玩家通过手机扫描二维码，即可使用对应的游戏手柄，进行愉快玩耍。'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },{
    provider: 'local',
    role: 'admin',
    name: 'Jalon',
    email: '824525504@qq.com',
    password: '134634ab'
  }, function() {
      console.log('finished populating users');
    }
  );
});
