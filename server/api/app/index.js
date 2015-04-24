'use strict';

var express = require('express');
var controller = require('./app.controller');

var router = express.Router();

router.get('/kind/:kind', controller.kindList); //  通过类型获得对应的app列表
router.get('/:id', controller.show);
router.get('/', controller.index); //  所有的app
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
router.get('/delete/:id', controller.destroy);

module.exports = router;
