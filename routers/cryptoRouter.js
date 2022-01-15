var express = require('express');
const { CryptoController } = require('../controllers/cryptoController');

var router = express.Router();

router.get('/', function(res,req) {
    res.json('hallo');
});
router.post('/', CryptoController.send);

module.exports = router;