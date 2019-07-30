const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
// const loginRoutes = require('./');
// const passportSetup = require('./../client/src/config/passport-setup.js');
// API routes
router.use('/api', apiRoutes);

// Authentication Routes
// router.use('/login', loginRoutes);

// if no API routes hit, send the React App
router.use((req, res) =>
res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

module.exports = router;