'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  nickname: String,
  contact: String,
  appName: String,
  appUrl: String,
  appCover: String
});

module.exports = mongoose.model('Thing', ThingSchema);
