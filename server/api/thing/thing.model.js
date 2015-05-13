'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  developer: { type: String, default: '未知' },
  contact: String,
  appName: String,
  appIntroduction: String,
  appUrl: String,
  appCover: String,
  ok: { type: Boolean, default: false },
  userId: String,
  keyCmd: String,
  createdAt: Date
});

module.exports = mongoose.model('Thing', ThingSchema);
