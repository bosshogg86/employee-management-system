const inquirer = require('inquirer');
const {
  menu,
  viewEmployees,
  viewDepartments,
  viewRoles,
  addEmployee,
  deleteEmployee,
  addDepartment,
  addRole,
  updateEmployeeRole,
  exit,
} = require('./lib/queries');

const init = async () => {
  try {
    const { selection } = await menu();
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
        updateEmployeeRole();
        break;
      // case 'Update employee manager':
      //   break;
      case 'Delete employee':
        deleteEmployee();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'Add role':
        addRole();
        break;
      // case 'Delete role':
      //   break;
      case 'View all departments':
        viewDepartments();
        break;
      case 'Add department':
        addDepartment();
        break;
      // case 'Delete department':
      //   break;
      case 'Exit':
        exit();
        break;
    }

    //const
  } catch (err) {
    console.log(err);
  }
};

init();
