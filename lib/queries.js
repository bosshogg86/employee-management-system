// require inquirer and connection
// Directly ask questions to the user in these functions
// Place the sql statements inside connection in here
// directly console table results from db
const inquirer = require('inquirer');
const connection = require('../config/connection');
const questions = require('./questions');

function viewEmployees() {
  connection.query('SELECT * FROM employees', (err, res) => {
    console.table(res);
  });
}
function viewRoles() {
  connection.query('SELECT * FROM roles', (err, res) => {
    console.table(res);
  });
}
function viewDepartments() {
  connection.query('SELECT * FROM departments', (err, res) => {
    console.table(res);
  });
}
const addEmployee = async () => {
  const addRes = await inquirer.prompt(questions.addEmployeeQuestions);
  console.table(addRes);
  // const query = 'INSERT INTO employees (firstName, lastName) VALUES ?;';
  // connection.query(query, addRes.firstName, (err, employee) => {
  //   if (err) throw err;
  //   console.table(employee);
  // });
};
const addDepartment = () => {};
const addRole = () => {};
const updateEmployeeRole = () => {};
const exit = () => {
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
