const inquirer = require('inquirer');
const connection = require('./config/connection');

const menu = () =>
  inquirer.prompt({
    type: 'list',
    name: 'selection',
    message: 'What would you like to do?',
    choices: [
      'View employees',
      'View employees by manager',
      'Add employee',
      'Update employee manager',
      'Update employee role',
      'Delete employee',
      'View roles',
      'Add role',
      'Delete role',
      'View departments',
      'Add department',
      'Delete department',
      'Exit',
    ],
  });

const init = async () => {
  try {
    const { selection } = await menu();
    switch (selection) {
      case 'View employees':
        viewEmployees();
        break;
      case 'View employees by manager':
        viewEmployeesByManager();
        break;
      case 'Add employee':
        addEmployee();
        break;
      case 'Update employee role':
        updateEmployeeRole();
        break;
      case 'Update employee manager':
        updateEmployeeManager();
        break;
      case 'Delete employee':
        deleteEmployee();
        break;
      case 'View roles':
        viewRoles();
        break;
      case 'Add role':
        addRole();
        break;
      case 'Delete role':
        deleteRole();
        break;
      case 'View departments':
        viewDepartments();
        break;
      case 'Add department':
        addDepartment();
        break;
      case 'Delete department':
        deleteDept();
        break;
      case 'Exit':
        exit();
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

const viewEmployees = async () => {
  const res = await connection.query(
    'SELECT employees.id, firstName, lastName, title, salary, department, role_id, manager_id FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id'
  );
  console.table(res);
  init();
};

const viewEmployeesByManager = async () => {
  let managers = await connection.query(
    'SELECT id, CONCAT (`firstName`, " ", `lastName`) AS name FROM employees'
  );
  managers = managers.map(row => {
    const manager = { name: row.name, value: row.id };
    return manager;
  });
  const { byManager } = await inquirer.prompt({
    type: 'list',
    name: 'byManager',
    message: `Select a manager to view employees managed`,
    choices: managers,
  });
  const res = await connection.query(
    `SELECT employees.id, manager_id, firstName, lastName FROM employees LEFT JOIN roles ON manager_id = employees.id WHERE manager_id = ${byManager};`
  );
  console.table(res);
  init();
};

const addEmployee = async () => {
  let roles = await connection.query(
    'SELECT title, roles.id AS role_id FROM roles;'
  );
  roles = roles.map(row => {
    const role = { name: row.title, value: row.role_id };
    return role;
  });
  let employees = await connection.query(
    'SELECT  employees.id, CONCAT (`firstName`, " ", `lastName`) AS name FROM employees;'
  );
  employees = employees.map(row => {
    const employee = { name: row.name, value: row.id };
    return employee;
  });

  const { firstName, lastName, role, manager } = await inquirer.prompt([
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
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's role?",
      choices: roles,
    },
    {
      type: 'list',
      name: 'manager',
      message: "Who is the employee's manager?",
      choices: employees,
    },
  ]);
  connection.query(
    `INSERT INTO employees (firstName, lastName, role_id, manager_id) VALUES ('${firstName}', '${lastName}', '${role}', '${manager}');`
  );
  console.log(firstName + ' ' + lastName + ' added');
  init();
};

const updateEmployeeRole = async () => {
  let employees = await connection.query(
    "SELECT id, CONCAT(`firstName`, ' ', `lastName`) AS name FROM employees;"
  );
  employees = employees.map(row => {
    const employee = { name: row.name, value: row.id };
    return employee;
  });
  let roles = await connection.query('SELECT title, id FROM roles;');
  roles = roles.map(row => {
    const role = { name: row.title, value: row.id };
    return role;
  });

  const { updateEmp, updateRole } = await inquirer.prompt([
    {
      type: 'list',
      name: 'updateEmp',
      message: `Which employee's role would you like to update?`,
      choices: employees,
    },
    {
      type: 'list',
      name: 'updateRole',
      message: `What is the employee's new role'?`,
      choices: roles,
    },
  ]);
  connection.query(
    `UPDATE employees SET role_id=${updateRole} WHERE id=${updateEmp};`
  );
  console.table('Role updated');
  init();
};

const updateEmployeeManager = async () => {
  let employees = await connection.query(
    "SELECT id, CONCAT(`firstName`, ' ', `lastName`) AS name FROM employees;"
  );
  employees = employees.map(row => {
    const employee = { name: row.name, value: row.id };
    return employee;
  });

  const { updateEmp, updateManager } = await inquirer.prompt([
    {
      type: 'list',
      name: 'updateEmp',
      message: `Which employee's manager would you like to update?`,
      choices: employees,
    },
    {
      type: 'list',
      name: 'updateManager',
      message: `What is the employee's new manager'?`,
      choices: employees,
    },
  ]);
  connection.query(
    `UPDATE employees SET manager_id=${updateManager} WHERE id=${updateEmp};`
  );
  console.table('Manager updated');
  init();
};

const deleteEmployee = async () => {
  let employees = await connection.query(
    'SELECT id, CONCAT(`firstName`, " ", `lastName`) AS name FROM employees'
  );
  employees = employees.map(row => {
    const employee = { name: row.name, value: row.id };
    return employee;
  });
  const { deleteEmp } = await inquirer.prompt({
    type: 'list',
    name: 'deleteEmp',
    message: `Which employee would you like to delete?`,
    choices: employees,
  });
  connection.query(`DELETE FROM employees WHERE id=${deleteEmp};`);
  console.log('Employee deleted');
  init();
};

const viewRoles = async () => {
  const res = await connection.query(
    'SELECT roles.id, title, salary, department_id, department FROM roles LEFT JOIN departments ON roles.department_id = departments.id'
  );
  console.table(res);
  init();
};

const addRole = async () => {
  let departments = await connection.query('SELECT * FROM departments');
  departments = departments.map(row => {
    const department = { name: row.department, value: row.id };
    return department;
  });
  const { title, salary, dept } = await inquirer.prompt([
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
    {
      type: 'list',
      name: 'dept',
      message: `Which department is the role in?`,
      choices: departments,
    },
  ]);
  connection.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', '${dept}');`
  );
  console.table(title + ' role added');
  init();
};

const deleteRole = async () => {
  let roles = await connection.query('SELECT id, title FROM roles');
  roles = roles.map(row => {
    const role = { name: row.title, value: row.id };
    return role;
  });
  const { deleteRole } = await inquirer.prompt({
    type: 'list',
    name: 'deleteRole',
    message: `Which role would you like to delete?`,
    choices: roles,
  });
  connection.query(`DELETE FROM roles WHERE id=${deleteRole};`);
  console.log('Role deleted');
  init();
};

const viewDepartments = async () => {
  const res = await connection.query('SELECT * FROM departments');
  console.table(res);
  init();
};

const addDepartment = async () => {
  const addRes = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'What is the name of the new department?',
  });
  connection.query(
    `INSERT INTO departments (department) VALUES ('${addRes.name}');`
  );
  console.table(addRes.name + ' department added');
  init();
};

const deleteDept = async () => {
  let departments = await connection.query(
    'SELECT id, department FROM departments'
  );
  departments = departments.map(row => {
    const department = { name: row.department, value: row.id };
    return department;
  });
  const { deleteDept } = await inquirer.prompt({
    type: 'list',
    name: 'deleteDept',
    message: `Which department would you like to delete?`,
    choices: departments,
  });
  connection.query(`DELETE FROM departments WHERE id=${deleteDept};`);
  console.log('Department deleted');
  init();
};

const exit = () => {
  connection.end();
};

init();
