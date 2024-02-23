// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const facebookRoutes = require('./routes/facebookRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// Middleware
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hey, I am up');
  });
  
  app.get('/healthcheck', (req, res) => {
    res.send('Hey, I am up');
  });
  
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fb-helpdesk')
    .then((data) => console.log('MongoDB Connected',data.connection._connectionString))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/facebook', facebookRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
