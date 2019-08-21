const path = require('path');
const router = require('express').Router();
const eventRoutes = require('./events');
const ebapiRoutes = require('./ebapi');

// Event routes
router.use('/events', eventRoutes);

// EBAPI routes
router.use('/ebapi', ebapiRoutes);


module.exports = router;