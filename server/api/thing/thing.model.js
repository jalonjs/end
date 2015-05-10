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
  createdAt: { type: Date },
  userId: String
});

module.exports = mongoose.model('Thing', ThingSchema);
