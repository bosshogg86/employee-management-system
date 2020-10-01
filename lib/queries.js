// require inquirer and connection
// Directly ask questions to the user in these functions
// Place the sql statements inside connection in here
// directly console table results from db

const connection = require('../config/connection');
const viewEmployees = async () => {
  const results = connection.query('SELECT * FROM employees');
  console.table(results);
};
const viewDepartments = async () => {};
const viewRoles = async () => {};
const addEmployee = async () => {};
const addDepartment = async () => {};
const addRole = async () => {};
const updateEmployeeRole = async () => {};
const exit = async () => {};

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
