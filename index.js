const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(3000, () => {
  console.log('Server listening on PORT http://localhost:3000');
});

// const getDepartments = () => {
//   const query = 'SELECT * FROM departments;';
//   connection.query(query, (err, res) => {
//     if (err) throw err;
//     console.table(res);
//   });
// };

// const getRoles = () => {
//   const query = 'SELECT * FROM roles;';
//   connection.query(query, (err, res) => {
//     if (err) throw err;
//     console.table(res);
//   });
// };

// const getEmployees = () => {
//   const query = 'SELECT * FROM employees;';
//   connection.query(query, (err, res) => {
//     if (err) throw err;
//     console.table(res);
//   });
// };

// const getEmployeesByManager = () => {
//   const query = 'SELECT * FROM employees ORDER BY manager_id;';
//   connection.query(query, (err, res) => {
//     if (err) throw err;
//     console.table(res);
//   });
// };
