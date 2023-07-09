
const exp = require('express');

const router = exp.Router();

const kontoController = require('../controllers/account_Controller');

router.get('/konto',kontoController.konto);

module.exports = router;