const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/team', require('./routes/teamRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));
app.use('/api/faqs', require('./routes/faqRoutes'));
app.use('/api/contests', require('./routes/contestRoutes'));

app.get('/', (req, res) => {
  res.send('GFG Campus Chapter API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
