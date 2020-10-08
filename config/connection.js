const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'emsDB',
});

connection.query = util.promisify(connection.query);

module.exports = connection;
