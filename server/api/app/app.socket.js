/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var App = require('./app.model');

exports.register = function(socket) {
  App.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  App.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('app:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('app:remove', doc);
}