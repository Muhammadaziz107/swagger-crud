const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1111",
  host: "localhost",
  port: 5432,
  database: "swagger",
});

module.exports = pool;
