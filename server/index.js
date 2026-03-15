const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'server is running', timestamp: new Date() });
});

// Contact Route (Example for MERN functionality)
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;
  try {
    // In a real app, we'd save this to MongoDB
    console.log(`Received message from ${email}: ${message}`);
    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Connect to MongoDB (Placeholder URI)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hltsolutions';
// mongoose.connect(MONGO_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
