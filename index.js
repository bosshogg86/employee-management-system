const inquirer = require('inquirer');
const { start } = require('./lib/questions');
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

const startPrompt = () => inquirer.prompt(start);

const init = async () => {
  try {
    const { selection } = await startPrompt();
    switch (selection) {
      case 'View all employees':
        viewEmployees();
        break;
      case 'View all departments':
        viewDepartments();
        break;
      case 'View all roles':
        viewRoles();
        break;
      // case 'View all employees by department':
      //   break;
      // case 'View all employees by manager':
      //   break;
      case 'Add employee':
        addEmployee();
        break;
      case 'Add department':
        addDepartment();
        break;
      case 'Add role':
        addRole();
        break;
      case 'Update employee role':
        updateEmployeeRole();
        break;
      case 'Exit':
        exit();
        break;
      // case 'Update employee manager':
      //   break;
      // case 'Remove employee':
      //   break;
      // case 'Remove department':
      //   break;
      // case 'Remove role':
      //   break;
      default:
        connection.end();
    }

    //const
  } catch (err) {
    console.log(err);
  }
};

init();
