'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppSchema = new Schema({
  name: String,
  introduction: String,
  cover: String,
  url: String,
  kind: String,
  developer: { type: String, default: '未知' },
  popular: { type: Boolean, default: false },
  createdAt: { type: Date }
});


module.exports = mongoose.model('App', AppSchema);
