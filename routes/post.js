const exp = require('express');

const router = exp.Router();
const passport = require('passport');

const postController = require('../controllers/postController');

router.post('/create', passport.checkAuthentication, postController.create);

module.exports = router;