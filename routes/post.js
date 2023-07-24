const exp = require('express');

const router = exp.Router();

const postController = require('../controllers/postController');

router.post('/create', postController.create);

module.exports = router;