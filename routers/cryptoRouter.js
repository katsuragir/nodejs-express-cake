var express = require('express');
const { CryptoController } = require('../controllers/cryptoController');

var router = express.Router();

router.post('/', CryptoController.send);

module.exports = router;