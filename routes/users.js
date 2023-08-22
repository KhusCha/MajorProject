const exp = require('express');
const router = exp.Router();
const passport = require('passport');


console.log('Router Loaded');

const userController = require('../controllers/userControllers');




router.get('/profi/:id', passport.checkAuthentication, userController.profile);
router.post('/update/:id',passport.checkAuthentication, userController.profiUpdate);
router.get('/konto',userController.konto);
router.get('/signIn', userController.signIn);
router.get('/signUp',userController.signUp);
router.post('/create', userController.create);
// Use passport as a middleware to authenticate
// post method can 3 parameters as an argument
router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect:'/users/signIn'},
),userController.createSession);

router.get('/logOut', userController.destroySession);
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback', passport.authenticate('google',{failureRedirect:'/users/SignIn'}),userController.createSession);
module.exports = router;