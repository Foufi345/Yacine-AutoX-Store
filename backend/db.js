require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || 'mongodb://appuser:YourSecurePassword123@localhost:27017/yacine-autox?authSource=yacine-autox', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;