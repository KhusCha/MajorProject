
const exp = require('express');

const router = exp.Router();

const signUpController = require('../controllers/signUpController');

router.get('/signUp',signUpController.signUp);

module.exports = router;