const Pool = require("pg").Pool;

const conString =
  "postgres://gueversq:hLlz3MIzbE2UTx24lSV_qCwzizwEp9EK@queenie.db.elephantsql.com/gueversq";

const pool = Pool.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

// const pool = new Pool({
//   user: "postgres",
//   password: "1111",
//   host: "localhost",
//   port: 5432,
//   database: "swagger",
// });

module.exports = pool;
