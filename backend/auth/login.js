const bcrypt = require("bcrypt");
const { Router } = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const router = Router();
const supabase = require('../database/databaseConn')

const secret = process.env.JWT_SECRET;

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Missing email or password");
  }

  try {
    // Fetch user from database
    const { data: user, error: fetchError } = await supabase
      .from("customers")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      throw fetchError;
    }

    // Check if user exists
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.customerid, userEmail: user.email },
      secret,
      { expiresIn: "24h" }
    );

    res.status(200).send({ message: "Logged in successfully", token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
