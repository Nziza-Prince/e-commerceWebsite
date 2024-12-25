const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
   user: process.env.DB_USER,
   host:process.env.DB_HOST,
   database:process.env.DB_NAME,
   password:process.env.DB_PASS,
   port:5432
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
