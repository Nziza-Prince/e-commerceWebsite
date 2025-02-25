
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const router = Router();
const secret = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Missing email or password');
  }

  try {
    // Fetch user from MongoDB
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, userEmail: user.email }, // Use user._id instead of customerid
      secret,
      { expiresIn: '24h' }
    );

    res.status(200).send({ message: 'Logged in successfully', token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
