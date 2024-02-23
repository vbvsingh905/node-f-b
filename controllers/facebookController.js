// controllers/facebookController.js
const config = require('config');
const axios = require('axios');

// Handle Facebook login callback
exports.facebookLoginCallback = async (req, res) => {
  try {
    // Extract code from request query parameters
    const code = req.query.code;

    // Make a POST request to exchange code for access token
    const response = await axios.get('https://graph.facebook.com/v12.0/oauth/access_token', {
      params: {
        client_id: config.get('facebookAppId'),
        client_secret: config.get('facebookAppSecret'),
        redirect_uri: config.get('facebookRedirectUri'),
        code: code
      }
    });

    // Extract access token from response
    const accessToken = response.data.access_token;

    // Use the access token to fetch user data
    const userDataResponse = await axios.get('https://graph.facebook.com/me', {
      params: {
        fields: 'id,name,email',
        access_token: accessToken
      }
    });

    // Extract user data
    const userData = userDataResponse.data;

    // Handle user data as needed (e.g., save to database, generate JWT token, etc.)
    
    // Respond with user data or JWT token
    res.json(userData);
  } catch (error) {
    console.error('Facebook login error:', error);
    res.status(500).json({ msg: 'Facebook login failed' });
  }
};
