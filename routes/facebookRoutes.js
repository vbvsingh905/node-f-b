// routes/facebookRoutes.js
const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebookController');

// @route    GET /api/facebook/callback
// @desc     Facebook login callback
// @access   Public
router.get('/callback', facebookController.facebookLoginCallback);

module.exports = router;
