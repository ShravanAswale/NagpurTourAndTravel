const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookingRoutes = require('./routes/bookings');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/travelDB';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Travel and Tourism API');
});

app.use('/api/bookings', bookingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
