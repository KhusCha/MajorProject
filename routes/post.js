const exp = require('express');

const router = exp.Router();
const passport = require('../config/passport-local-strategy');

const postController = require('../controllers/postController');

router.post('/create', passport.checkAuthentication, postController.create);

module.exports = router;