const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  linkedIn: { type: String },
  github: { type: String },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);
