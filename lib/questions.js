// const validator = require("validator");

const questions = {
  menu: {
    type: 'list',
    name: 'selection',
    message: 'What would you like to do?',
    choices: [
      'View all employees',
      //'View all employees by manager',
      'Add employee',
      //'Update employee manager',
      //'Remove employee',
      'View all roles',
      'Add role',
      'Update employee role',
      //'Remove role',
      'View all departments',
      'Add department',
      //'Remove department',
      'Exit',
    ],
  },
  addEmployee: [
    {
      type: 'input',
      name: 'firstName',
      message: "What is the employee's first name?",
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the employee's last name?",
    },
    // {
    //   type: 'list',
    //   name: 'role',
    //   message: "What is the employee's role?",
    //   choices: ['A1', 'A2', 'V1', 'Camera Operator', 'EVS', 'RO', 'Director'],
    // },
    // {
    //   type: 'list',
    //   name: 'manager',
    //   message: "Who is the employee's manager?",
    //   choices: ['Kyle Farnham', 'Blake Bos', 'Steve Lowe'],
    // },
  ],
  addDepartment: {
    type: 'input',
    name: 'name',
    message: 'What is the name of the department?',
  },
  addRole: [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the role?',
    },
    {
      type: 'input',
      name: 'salary',
      message: `What is the role's salary?`,
    },
  ],
};

module.exports = questions;
