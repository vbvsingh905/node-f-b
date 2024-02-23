// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// @route    POST /api/messages
// @desc     Process incoming message
// @access   Public
router.post('/', messageController.processMessage);

module.exports = router;
