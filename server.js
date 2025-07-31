const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');
const dietRoutes = require('./routes/diet');
const bmiRoutes = require('./routes/bmi');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 🛣️ Routes
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/diet', dietRoutes);
app.use('/api/bmi', bmiRoutes);

// 🌐 MongoDB connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('❌ Error: MONGODB_URI is not defined in environment variables.');
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB Atlas 🚀');
  app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT} ✨`);
  });
}).catch((error) => {
  console.error('❗ MongoDB connection error:', error);
});
