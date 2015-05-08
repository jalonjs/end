'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/user/:id', controller.myApp);
router.post('/pass/:id', controller.pass);  //审查通过
router.get('/:id', controller.show);
router.get('/remove/:id', controller.destroy);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);

module.exports = router;
