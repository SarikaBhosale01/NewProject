// Keep your existing imports and config
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const uploadRoute = require('./routes/upload');


const app = express();
app.use('/api/upload', uploadRoute);
app.use('/uploads', express.static('uploads')); // Serve uploaded files
// Middleware (keep your existing CORS config)
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Database connection (keep existing)
mongoose.connect("mongodb://127.0.0.1:27017/projects")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes (keep existing)
//app.use("/api/projects", projectRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes); // 👈 Now points to authRoutes.js
app.use('/uploads', express.static('uploads'));
// Error handlers (keep existing)
app.use((req, res) => res.status(404).json({ success: false, error: 'Endpoint not found' }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message
  });
});

app.get('/api/test', (req, res) => {
  res.json({ success: true, message: "API is working!" });
});
app.listen(5000, () => console.log("Server running on port 5000"));