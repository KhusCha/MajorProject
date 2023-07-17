const exp = require('express');
const router = exp.Router();



console.log('Router Loaded');

const userController = require('../controllers/userControllers');




router.get('/profi', userController.profile);
router.get('/konto',userController.konto);
router.get('/signIn', userController.signIn);
router.get('/signUp',userController.signUp);
router.post('/create', userController.create);
router.post('/createSession', userController.createSession);


module.exports = router;