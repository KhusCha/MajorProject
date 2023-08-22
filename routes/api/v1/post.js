const exp = require('express');

const router = exp.Router();

const postsApi = require('../../../controllers/api/v1/post_api');

router.get('/', postsApi.index);



module.exports = router;
