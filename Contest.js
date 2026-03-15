const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  link: { type: String, required: true },
  platform: { type: String, default: 'GeeksforGeeks' },
  status: { type: String, enum: ['Upcoming', 'Past', 'Ongoing'], default: 'Upcoming' },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Contest', contestSchema);
