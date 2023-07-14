const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_Controller');

console.log('router loaded');


router.get('/home1', homeController.home);
router.use('/users', require('./users'));

module.exports = router;