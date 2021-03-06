/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model'); //  开发者提交的
var User = require('../api/user/user.model');  // 用户
var App = require('../api/app/app.model');  //  应用

//  这是默认插入的一些测试数据
App.find({}).remove(function() {
  App.create({
    name: '太空大战',
    introduction: '这是一款html5网页游戏，玩家通过手机扫描二维码，即可使用对应的游戏手柄，进行愉快玩耍。',
    cover: '/assets/images/spacewar.png',
    url: 'http://localhost/game/spacewar',
    kind: 'game',
    popular: true,
    keyCmd: '[]',
    createdAt: new Date()
  },{
    name: '2013快男总决赛投票',
    introduction: '在现场大屏幕上展示二维码，现场用户用手机扫描二维码，可以对选手进行投票。',
    cover: 'http://localhost/superboyvote/img/sblogo.png',
    url: 'http://localhost/superboyvote/index.html',
    kind: 'media',
    popular: true,
    keyCmd: '[{"key":"1号", "cmd":"1"},{"key":"2号", "cmd":"2"},{"key":"3号", "cmd":"3"}]',
    createdAt: new Date()
  });
});

//  这是默认插入的一些测试数据
Thing.find({}).remove(function() {
  Thing.create({
    name: '2013快男总决赛投票',
    introduction: '在现场大屏幕上展示二维码，现场用户用手机扫描二维码，可以对选手进行投票。',
    cover: 'http://localhost/superboyvote/img/sblogo.png',
    url: 'http://localhost/superboyvote/index.html',
    kind: 'media',
    popular: true,
    scope: 'private',
    keyCmd: '[{"key":"1号", "cmd":"1"},{"key":"2号", "cmd":"2"},{"key":"3号", "cmd":"3"}]',
    createdAt: new Date()
  });
});


//  默认几个用户
User.create({
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
  },{
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
    console.log('finished populating users');
  }
);

//User.find({}).remove(function() {


//});
