
const exp = require('express');

const router = exp.Router();

const signInController = require('../controllers/signInController');

router.get('/signIn', signInController.signIn);

module.exports = router;