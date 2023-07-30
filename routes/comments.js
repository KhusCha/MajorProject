const exp = require('express');

const router = exp.Router();
const passport = require('passport');

const commentController = require('../controllers/commentController');

router.post('/create', passport.checkAuthentication, commentController.create);

module.exports = router;