const path = require('path');
const router = require('express').Router();
const eventRoutes = require('./events');
const ebapiRoutes = require('./ebapi');

// Event routes
router.use('/events', eventRoutes);

// EBAPI routes
router.use('/ebapi', ebapiRoutes);

// For anything else, render html pg
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;