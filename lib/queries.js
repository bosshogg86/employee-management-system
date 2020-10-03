const inquirer = require('inquirer');
const connection = require('../config/connection');
const questions = require('./questions');

const viewEmployees = () => {
  connection.query(
    'SELECT * FROM Employees LEFT JOIN Roles ON Employees.role_id = Roles.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
};
const viewRoles = () => {
  connection.query(
    'SELECT * FROM Roles LEFT JOIN Departments ON Roles.department_id = Departments.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
};
const viewDepartments = () => {
  connection.query('SELECT * FROM Departments', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
const addEmployee = async () => {
  const addRes = await inquirer.prompt(questions.addEmployee);
  const query = `INSERT INTO Employees (firstName, lastName) VALUES ("${addRes.firstName}", "${addRes.lastName}");`;
  connection.query(query, (err, _res) => {
    if (err) throw err;
    console.table(addRes);
  });
};
const addRole = async () => {
  const addRes = await inquirer.prompt(questions.addRole);
  const salary = parseInt(addRes.salary);
  const query = `INSERT INTO Roles (title, salary) VALUES ('${addRes.title}', '${salary}');`;
  connection.query(query, (err, _res) => {
    if (err) throw err;
    console.table(addRes);
  });
};

const addDepartment = async () => {
  const addRes = await inquirer.prompt(questions.addDepartment);
  const query = `INSERT INTO departments (name) VALUES ('${addRes.name}');`;
  connection.query(query, (err, _res) => {
    if (err) throw err;
    console.table(addRes);
  });
};
const updateEmployeeRole = async () => {
  const addRes = await inquirer.prompt(questions.updateEmployeeRole);
  // const query = `UPDATE employees LEFT JOIN roles SET employees.role_id = roles.id WHERE ${addRes.}`;
  console.table(addRes);
};
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
