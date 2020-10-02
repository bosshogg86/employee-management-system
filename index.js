const inquirer = require('inquirer');
const { questions } = require('./lib/questions');
const {
  viewEmployees,
  viewDepartments,
  viewRoles,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployeeRole,
  exit,
} = require('./lib/queries');

const startPrompt = () => inquirer.prompt(questions.start);

const init = async () => {
  try {
    const { selection } = await startPrompt();
    switch (selection) {
      case 'View all employees':
        viewEmployees();
        break;
      // case 'View all employees by manager':
      //   break;
      case 'Add employee':
        addEmployee();
        break;
      case 'Update employee role':
        // updateEmployeeRole();
        break;
      // case 'Remove employee':
      //   break;
      case 'View all roles':
        viewRoles();
        break;
      case 'Add role':
        // addRole();
        break;
      case 'View all departments':
        viewDepartments();
        break;
      case 'Add department':
        // addDepartment();
        break;
      case 'Exit':
        exit();
        break;
      // case 'Update employee manager':
      //   break;
      // case 'Remove department':
      //   break;
      // case 'Remove role':
      //   break;
    }

    //const
  } catch (err) {
    console.log(err);
  }
};

init();
