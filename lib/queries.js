const inquirer = require('inquirer');
const connection = require('../config/connection');
const questions = require('./questions');

const viewEmployees = () => {
  connection.query(
    'SELECT * FROM employees LEFT JOIN roles ON  employees.role_id = roles.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
};
const viewRoles = () => {
  connection.query(
    'SELECT * FROM roles LEFT JOIN departments ON roles.department_id = departments.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
};
const viewDepartments = () => {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
const addEmployee = async () => {
  const addRes = await inquirer.prompt(questions.addEmployee);
  const query = `INSERT INTO employees (firstName, lastName) VALUES ("${addRes.firstName}", "${addRes.lastName}");`;
  connection.query(query, (err, _res) => {
    if (err) throw err;
    console.table(addRes);
  });
};
const addRole = async () => {
  const addRes = await inquirer.prompt(questions.addRole);
  const salary = parseInt(addRes.salary);
  const query = `INSERT INTO roles (title, salary) VALUES ('${addRes.title}', '${salary}');`;
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
// const updateEmployeeRole = async () => {
//   // const updateRes = await inquirer.prompt(questions.updateEmployeeRole);
// };
const exit = () => {
  connection.end();
};

const updateEmployeeRole = async () => {
  connection.query(
    "SELECT id, CONCAT(`firstName`, ' ', `lastName`) AS name FROM employees",
    (err, res) => {
      if (err) throw err;
      const employeesArr = res.map(row => {
        const employee = { name: row.name, value: row.id };
        return employee;
      });
      inquirer.prompt({
        type: 'list',
        name: 'updateRole',
        message: `Which employee's role would you like to update?`,
        choices: employeesArr,
      });
      // console.table(employees);
    }
  );
};

// const getRolesArr = () => {
//   connection.query('SELECT * FROM roles', (err, res) => {
//     if (err) throw err;
//     const roles = res.map(row => {
//       const role = { name: row.name, value: row.id };
//       return role;
//     });
//   });
// };

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
