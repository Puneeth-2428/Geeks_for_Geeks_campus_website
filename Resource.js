const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g., DSA, Development, Interview Prep
  link: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
