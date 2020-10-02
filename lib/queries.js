// require inquirer and connection
// Directly ask questions to the user in these functions
// Place the sql statements inside connection in here
// directly console table results from db
const inquirer = require('inquirer');
const connection = require('../config/connection');
const { questions } = require('./questions');

const viewEmployees = async () => {
  const employees = await connection.query('SELECT * FROM employees;');
  console.table(employees);
};
const viewDepartments = async () => {
  const departments = await connection.query('SELECT * FROM departments;');
  console.table(departments);
};
const viewRoles = async () => {
  const roles = await connection.query('SELECT * FROM roles;');
  console.table(roles);
};
const addEmployee = async () => {
  const addRes = await inquirer.prompt(questions.addEmployeeQuestions);
  console.table(addRes);
};
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
