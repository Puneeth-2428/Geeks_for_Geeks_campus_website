const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');

// GET all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
