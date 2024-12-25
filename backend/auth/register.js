const { Router } = require("express");
const router = Router();

const bcrypt = require("bcrypt");
const pool = require("../database/databaseConn")

router.post("/", async (req, res) => {
  const { customername, email, password } = req.body;
  if (!customername || !email || !password){
    return res.status(400).json({error: "Missing required fields"})
  }
  try {
    // Check if the user already exists
     const result = await pool.query("select * from customers where email = $1",[email])
     if(result.rows.length > 0){
      return res.status(400).send("User with that email already exists")
     }
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery = `
      INSERT INTO customers (customername, email, password)
      VALUES ($1, $2, $3) RETURNING *;
    `;
     
    const insertValues = [customername,email,hashedPassword]
    const insertResult = await pool.query(insertQuery,insertValues)

    const newUser = insertResult.rows[0]
    res.status(201).send(newUser)
  }catch(err){
    console.error(err)
    res.status(500).send("Error creating user")
  }
});

module.exports = router;
