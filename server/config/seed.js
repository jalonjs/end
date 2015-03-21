/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : '跳高王',
    info : 'html5游戏。'
  }, {
    name : '全场投票',
    info : '适用于会场，演播间，会议室，教室等多种场合的多人投票应用。'
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
