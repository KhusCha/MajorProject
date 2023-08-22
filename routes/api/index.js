const exp = require('express');

const router = exp.Router();

router.use('/v1', require('./v1'));

module.exports = router;
