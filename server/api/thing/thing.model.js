'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  nickname: String,
  contact: String,
  appName: String,
  appIntroduction: String,
  appUrl: String,
  appCover: String,
  ok: { type: Boolean, default: false },
  createdAt: { type: Date }
});

module.exports = mongoose.model('Thing', ThingSchema);
