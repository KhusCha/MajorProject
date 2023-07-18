const exp = require('express');
const router = exp.Router();
const passport = require('passport');


console.log('Router Loaded');

const userController = require('../controllers/userControllers');




router.get('/profi', userController.profile);
router.get('/konto',userController.konto);
router.get('/signIn', userController.signIn);
router.get('/signUp',userController.signUp);
router.post('/create', userController.create);
// Use passport as a middleware to authenticate
router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect:'/users/signIn'},
),userController.createSession);


module.exports = router;