const { Pool } = require('pg');
const pool = new Pool({
   user:"postgres",
   host:"localhost",
   database:"ecommerce",
   password:"co2hno3",
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
