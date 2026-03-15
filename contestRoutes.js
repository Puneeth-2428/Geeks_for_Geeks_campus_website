const express = require('express');
const router = express.Router();
const Contest = require('../models/Contest');

// GET all contests
router.get('/', async (req, res) => {
  try {
    const contests = await Contest.find().sort({ date: 1 });
    res.json(contests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
