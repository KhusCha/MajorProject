const exp = require('express');

const router = exp.Router();

router.use('/posts', require('./post'));

module.exports = router;