const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// GET all team members
router.get('/', async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
