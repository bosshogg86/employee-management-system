const inquirer = require('inquirer');
const connection = require('../config/connection');
const questions = require('./questions');

const viewDepartments = () => {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
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

const viewEmployees = () => {
  connection.query(
    'SELECT * FROM employees LEFT JOIN roles ON  employees.role_id = roles.id',
    (err, res) => {
      if (err) throw err;
      console.table(res);
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
      console.table(addRes);
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
            console.table(res);
          }
        );
      });
  });
};

const addEmployee = () => {
  connection.query('SELECT * FROM roles', (err, res) => {
    if (err) throw err;
    const roles = res.map(row => {
      const role = { name: row.title, value: row.id };
      return role;
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
        // {
        //   type: 'list',
        //   name: 'manager',
        //   message: "Who is the employee's manager?",
        //   choices: ['Kyle Farnham', 'Blake Bos', 'Steve Lowe'],
        // },
      ])
      .then(res => {
        connection.query(
          `INSERT INTO employees (firstName, lastName, role_id) VALUES ('${res.firstName}', '${res.lastName}', '${res.role}');`,
          (err, _res) => {
            if (err) throw err;
            console.table(res);
          }
        );
      });
  });
};

// const addRes = inquirer.prompt(questions.addEmployee);
// const query = `INSERT INTO employees (firstName, lastName) VALUES ("${addRes.firstName}", "${addRes.lastName}");`;
// connection.query(query, (err, _res) => {
//   if (err) throw err;
//   console.table(addRes);
// });
// const updateEmployeeRole = async () => {
//   // const updateRes = await inquirer.prompt(questions.updateEmployeeRole);
// };
const exit = () => {
  connection.end();
};

const updateEmployeeRole = () => {
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
