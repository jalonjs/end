'use strict';

var _ = require('lodash');
var App = require('./app.model');

// Get list of apps
exports.index = function(req, res) {
  App.find(function (err, apps) {
    if(err) { return handleError(res, err); }
    return res.json(200, apps);
  });
};

// Get popular apps
exports.popularList = function(req, res) {
  App.find({ popular : true }, function (err, list) {
    if(err) { return handleError(res, err); }
    if(!list) { return res.send(404); }
    return res.json(200, list);
  });
};

// Get list of apps by kind of
exports.kindList = function(req, res) {
  App.find({ kind : req.params.kind }, function (err, list) {
    if(err) { return handleError(res, err); }
    if(!list) { return res.send(404); }
    return res.json(200, list);
  });
};

// Get a single app
exports.show = function(req, res) {
  App.findById(req.params.id, function (err, app) {
    if(err) { return handleError(res, err); }
    if(!app) { return res.send(404); }
    return res.json(app);
  });
};

// Creates a new app in the DB.
exports.create = function(req, res) {
  App.create(req.body, function(err, app) {
    if(err) { return handleError(res, err); }
    return res.json(201, app);
  });
};

// Updates an existing app in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  App.findById(req.params.id, function (err, app) {
    if (err) { return handleError(res, err); }
    if(!app) { return res.send(404); }
    var updated = _.merge(app, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, app);
    });
  });
};

// Deletes a app from the DB.
exports.destroy = function(req, res) {
  App.findById(req.params.id, function (err, app) {
    if(err) { return handleError(res, err); }
    if(!app) { return res.send(404); }
    app.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// set a app be popular.
exports.popular = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  App.findById(req.params.id, function (err, app) {
    if (err) { return handleError(res, err); }
    if(!app) { return res.send(404); }
    var updated = _.merge(app, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, app);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
