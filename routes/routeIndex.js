
const exp = require('express');
const router = exp();


console.log('Router Loaded');

const homeController = require('../controllers/home_Controller');


router.get('/home1', homeController.home);
router.use('/usersProfile', require('./routeProfile'));
router.use('/account', require('./routeKonto'));


module.exports = router;