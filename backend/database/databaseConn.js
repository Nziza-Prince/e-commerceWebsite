const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.DB_URL, // Use the connection URL from the environment variable
    ssl: {
       rejectUnauthorized: false, // Necessary for secure connections with certain managed services like Render
    }
 });

pool.connect()
    .then(client => {
        console.log("Db connected successfully");
        client.release();
    })
    .catch(err => {
        console.error("Db connection failed", err);
    });

module.exports = pool;
