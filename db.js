const Pool = require("pg").Pool;

const pool = new Pool({
  user: "gueversq",
  password: "hLlz3MIzbE2UTx24lSV_qCwzizwEp9EK",
  host: "queenie.db.elephantsql.com",
  port: 5432,
  database: "gueversq",
});

module.exports = pool;
