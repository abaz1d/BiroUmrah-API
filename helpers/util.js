const mysql = require('mysql2');

const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

class Response {
  constructor(data, success = true) {
      this.success = success
      this.data = data
  }
}

module.exports = { pool, Response }