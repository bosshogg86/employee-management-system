// const validator = require("validator");

const questions = {
  start: {
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
  // addEmployee: [
  //   {
  //     type: 'input',
  //     name: 'firstName',
  //     message: "What is the employee's first name?",
  //   },
  //   {
  //     type: 'input',
  //     name: 'lastName',
  //     message: "What is the employee's last name?",
  //   },
  //   {
  //     type: 'list',
  //     name: 'role',
  //     message: "What is the employee's role?",
  //     choices: roles,
  //   },
  //   {
  //     type: 'list',
  //     name: 'manager',
  //     message: "Who is the employee's manager?",
  //     choices: ['Winnie the Pooh', 'Tigger', 'Piglet'],
  //   },
  // ],
};

module.exports = questions;
