const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({});

const register = require("./auth/register.js");
const login = require("./auth/login.js");

const port = process.env.PORT || 3000;

// CORS middleware configuration
app.use(cors());
app.use(express.json());

// Registering the routes
app.use("/register", register);
app.use("/login", login);

// Use the todos routes

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
