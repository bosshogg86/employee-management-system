// require inquirer and connection
// Directly ask questions to the user in these functions
// Place the sql statements inside connection in here
// directly console table results from db

const connection = require('../config/connection');

const viewEmployees = async () => {
  res = await connection.query('SELECT * FROM employees');
  console.table(res);
};
const viewDepartments = async () => {
  res = await connection.query('SELECT * FROM departments');
  console.table(res);
};
const viewRoles = async () => {};
const addEmployee = async () => {};
const addDepartment = async () => {};
const addRole = async () => {};
const updateEmployeeRole = async () => {};
const exit = async () => {
  connection.end();
};

module.exports = {
  viewEmployees,
  viewDepartments,
  viewRoles,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployeeRole,
  exit,
};
