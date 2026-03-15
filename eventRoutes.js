const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET all events categorized as upcoming and past
router.get('/', async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    const events = await Event.find().sort({ date: 1 });
    
    const upcoming = events.filter(e => new Date(e.date) >= today);
    const past = events.filter(e => new Date(e.date) < today);

    res.json({ upcoming, past });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
