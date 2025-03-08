const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
// Add at the top of authRoutes.js
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Ensure .env is loaded
// Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create user (password auto-hashed via pre-save hook)
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'Signup successful!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Run in authRoutes.js temporarily
router.post('/fix-passwords', async (req, res) => {
  const users = await User.find();
  
  for (const user of users) {
    if (!user.password.startsWith('$2a$')) { // Check if unhashed
      user.password = await bcrypt.hash(user.password, 10);
      await user.save();
    }
  }
  
  res.json({ success: true });
});
// Login
// Updated login route
// 
// Enhanced login validation
// routes/authRoutes.js
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for:', email); // 👈 Debug log

    // Trim and validate inputs
    const cleanEmail = email?.trim().toLowerCase();
    const cleanPassword = password?.trim();

    if (!cleanEmail || !cleanPassword) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Find user
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      console.log('User not found:', cleanEmail); // 👈 Debug log
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Password validation
    console.log('Stored hash:', user.password); // 👈 Debug log
    const isMatch = await bcrypt.compare(cleanPassword, user.password);
    
    if (!isMatch) {
      console.log('Password mismatch for:', cleanEmail); // 👈 Debug log
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token

    res.json({ success: true, token: "YOUR_JWT_TOKEN" });

  } catch (err) {
    console.error('Login error:', err); // 👈 Critical error log
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;