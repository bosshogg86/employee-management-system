const inquirer = require('inquirer');
const connection = require('../config/connection');

const menu = () =>
  inquirer.prompt({
    type: 'list',
    name: 'selection',
    message: 'What would you like to do?',
    choices: [
      'View all employees',
      'View all employees by manager',
      'Add employee',
      //'Update employee manager',
      'Delete employee',
      'View all roles',
      'Add role',
      'Update employee role',
      //'Delete role',
      'View all departments',
      'Add department',
      //'Delete department',
      'Exit',
    ],
  });

const viewDepartments = () => {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};

const viewRoles = () => {
  connection.query(
    'SELECT roles.id, title, salary, department_id, department FROM roles LEFT JOIN departments ON roles.department_id = departments.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
};

const viewEmployees = () => {
  connection.query(
    'SELECT employees.id, firstName, lastName, title, salary, department, role_id, manager_id FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
};

const viewEmployeesByManager = () => {
  connection.query(
    'SELECT id, CONCAT (`firstName`, " ", `lastName`) AS name FROM employees',
    (err, res) => {
      if (err) throw err;
      const managers = res.map(row => {
        const manager = { name: row.name, value: row.id };
        return manager;
      });
      inquirer
        .prompt({
          type: 'list',
          name: 'byManager',
          message: `Select a manager to view employees managed`,
          choices: managers,
        })
        .then(res => {
          connection.query(
            `SELECT employees.id, manager_id, firstName, lastName FROM employees LEFT JOIN roles ON manager_id = employees.id WHERE manager_id = ${res.byManager};`,
            (err, res) => {
              if (err) throw err;
              console.table(res);
            }
          );
        });
    }
  );
};

const addDepartment = async () => {
  const addRes = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'What is the name of the new department?',
  });
  connection.query(
    `INSERT INTO departments (department) VALUES ('${addRes.name}');`,
    (err, _res) => {
      if (err) throw err;
      console.table(addRes.name + ' department added');
    }
  );
};

const addRole = () => {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    const departments = res.map(row => {
      const department = { name: row.department, value: row.id };
      return department;
    });
    inquirer
      .prompt([
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
      ])
      .then(res => {
        connection.query(
          `INSERT INTO roles (title, salary, department_id) VALUES ('${res.title}', '${res.salary}', '${res.dept}');`,
          (err, _res) => {
            if (err) throw err;
            console.table(res.title + ' role added');
          }
        );
      });
  });
};

const addEmployee = () => {
  connection.query(
    'SELECT title, roles.id AS role_id, employees.id,  CONCAT (`firstName`, " ", `lastName`) AS name FROM employees LEFT JOIN roles ON employees.role_id = roles.id;',
    (err, res) => {
      if (err) throw err;
      const roles = res.map(row => {
        const role = { name: row.title, value: row.role_id };
        return role;
      });
      const employees = res.map(row => {
        const employee = { name: row.name, value: row.role_id };
        return employee;
      });
      inquirer
        .prompt([
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
        ])
        .then(res => {
          connection.query(
            `INSERT INTO employees (firstName, lastName, role_id, manager_id) VALUES ('${res.firstName}', '${res.lastName}', '${res.role}', '${res.manager}');`,
            (err, _res) => {
              if (err) throw err;
              console.log(res.firstName + ' ' + res.lastName + ' added');
            }
          );
        });
    }
  );
};

const updateEmployeeRole = () => {
  connection.query(
    "SELECT employees.id AS id, CONCAT(`firstName`, ' ', `lastName`) AS name, title, roles.id AS role_id FROM employees LEFT JOIN roles ON roles.id = employees.role_id",
    (err, res) => {
      if (err) throw err;
      const employees = res.map(row => {
        const employee = { name: row.name, value: row.id };
        return employee;
      });
      const roles = res.map(row => {
        const role = { name: row.title, value: row.role_id };
        return role;
      });
      inquirer
        .prompt([
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
        ])
        .then(res => {
          connection.query(
            `UPDATE employees SET role_id=${res.updateRole} WHERE id=${res.updateEmp};`,
            (err, _res) => {
              if (err) throw err;
              console.table('Role updated');
            }
          );
        });
    }
  );
};

const deleteEmployee = () => {
  connection.query(
    'SELECT id, CONCAT(`firstName`, " ", `lastName`) AS name FROM employees',
    (err, res) => {
      if (err) throw err;
      const employees = res.map(row => {
        const employee = { name: row.name, value: row.id };
        return employee;
      });
      inquirer
        .prompt({
          type: 'list',
          name: 'deleteEmp',
          message: `Which employee's role would you like to delete?`,
          choices: employees,
        })
        .then(res => {
          connection.query(
            `DELETE FROM employees WHERE id=${res.deleteEmp};`,
            (err, _res) => {
              if (err) throw err;
              console.table('Employee deleted');
            }
          );
        });
    }
  );
};

const exit = () => {
  connection.end();
};

module.exports = {
  menu,
  viewEmployees,
  viewEmployeesByManager,
  addEmployee,
  updateEmployeeRole,
  deleteEmployee,
  viewRoles,
  addRole,
  viewDepartments,
  addDepartment,
  exit,
};
