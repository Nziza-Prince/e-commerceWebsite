const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const pool = require("../database/databaseConn");
const jwt = require("jsonwebtoken");

const secret = "TopSecret";

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user from database
    const userResult = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

    // Check if user exists
    if (userResult.rows.length === 0) {
      return res.status(404).send("User not found");
    }

    const user = userResult.rows[0]; // Extract user from the query result

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, userEmail: user.email }, // Use correct field names
      secret,
      { expiresIn: "24h" }
    );

    res.status(200).send({ message: "Logged in successfully", token: token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
