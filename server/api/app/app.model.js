'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppSchema = new Schema({
  name: String,
  introduction: String,
  cover: String,
  url: String,
  kind: String
});


module.exports = mongoose.model('App', AppSchema);
