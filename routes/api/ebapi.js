const router = require('express').Router();
const ebapiController = require('../../controllers/ebapiController');

router
.route('/')
.get(ebapiController.findAll);

module.exports = router;