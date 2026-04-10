const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const QuoteRequest = require('./models/QuoteRequest');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/arcten')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Submit Quote Request
app.post('/api/quote-request', async (req, res) => {
  try {
    const { companyName, email, phone, productInterest, estimatedQuantity, additionalNotes } = req.body;

    // Validation
    if (!companyName || !email || !phone || !productInterest || !estimatedQuantity) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    const quoteRequest = new QuoteRequest({
      companyName,
      email,
      phone,
      productInterest,
      estimatedQuantity,
      additionalNotes,
    });

    await quoteRequest.save();

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully. Our team will contact you within 24 hours.',
      data: { id: quoteRequest._id },
    });
  } catch (error) {
    console.error('Quote request error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors).map(e => e.message).join(', '),
      });
    }

    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

// Get all quote requests (admin)
app.get('/api/quote-requests', async (req, res) => {
  try {
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, data: quotes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`ARCTen API running on port ${PORT}`);
});
