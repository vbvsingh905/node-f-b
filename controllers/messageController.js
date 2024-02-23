const Message = require('../models/message.model');

// Process incoming messages
exports.processMessage = async (req, res) => {
  try {
    // Extract message data from request
    const { customerId, message } = req.body;

    // Process message as needed (e.g., save to database)
    const newMessage = new Message({
      customerId,
      message
    });

    await newMessage.save();

    res.json({ msg: 'Message processed successfully' });
  } catch (error) {
    console.error('Message processing error:', error);
    res.status(500).json({ msg: 'Message processing failed' });
  }
};
