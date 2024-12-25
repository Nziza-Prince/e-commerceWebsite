const { Router } = require("express");
const router = Router();

const bcrypt = require("bcrypt");
const pool = require("../database/databaseConn")

router.post("/", async (req, res) => {
  const { user_name, email, password } = req.body;
  if (!user_name || !email || !password){
    return res.status(400).json({error: "Missing required fields"})
  }
  try {
    // Check if the user already exists
     const result = await pool.query("select * from users where email = $1",[email])
     if(result.rows.length > 0){
      return res.status(400).send("User already ")
     }
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery = `
      INSERT INTO users (user_name, email, password)
      VALUES ($1, $2, $3) RETURNING *;
    `;
     
    const insertValues = [user_name,email,hashedPassword]
    const insertResult = await pool.query(insertQuery,insertValues)

    const newUser = insertResult.rows[0]
    res.status(201).send(newUser)
  }catch(err){
    console.error(err)
    res.status(500).send("Error creating user")
  }
});

module.exports = router;
