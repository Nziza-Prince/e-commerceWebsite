const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const supabase = require('../database/databaseConn')
require("dotenv").config();



router.post("/", async (req, res) => {
  const { customername, email, password } = req.body;

  if (!customername || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Check if the user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from("customers")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      throw fetchError;
    }

    if (existingUser) {
      return res.status(400).send("User with that email already exists");
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const { data: newUser, error: insertError } = await supabase
      .from("customers")
      .insert([
        {
          customername,
          email,
          password: hashedPassword,
        },
      ])
      .single();

    if (insertError) {
      throw insertError;
    }

    res.status(201).send(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

module.exports = router;
