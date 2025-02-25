const { Router } = require("express");
const router = Router();
const User = require("../models/User");
require("dotenv").config();

router.post('/', async (req, res) => {
  const { customername, email, password } = req.body;

  if (!customername || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User with that email already exists');
    }

    // Create new user
    const newUser = new User({ customername, email, password });
    await newUser.save();

    res.status(201).send(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
});

module.exports = router;
