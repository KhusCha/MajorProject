
const exp = require('express');

const router = exp.Router();

console.log('Profile router is loaded');

const profileControllers = require('../controllers/profile_Controller');

router.get('/profi', profileControllers.profile);


module.exports = router;