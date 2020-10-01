const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
const { questions } = require("./lib/questions");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employeeDB",
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected");
  init();
});

const startPrompt = () => inquirer.prompt(questions.start);

const init = async () => {
  try {
    let res = await startPrompt();
    console.log(res);
    switch (res.selection) {
      case "View all departments":
        getDepartments();
        break;
      case "View all roles":
        getRoles();
        break;
      case "View all employees":
        getEmployees();
        break;
      case "View all employees by manager":
        getEmployeesByManager();
        break;
      case "Add department":
        break;
      case "Add role":
        break;
      case "Add employee":
        break;
      case "Update employee role":
        break;
      case "Update employee manager":
        break;
      case "Remove department":
        break;
      case "Remove role":
        break;
      case "Remove employee":
        break;
      default:
        connection.end();
    }
  } catch (err) {
    console.log(err);
  }
};

const getDepartments = () => {
  const query = "SELECT * FROM departments;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};

const getRoles = () => {
  const query = "SELECT * FROM roles;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};

const getEmployees = () => {
  const query = "SELECT * FROM employees;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};

const getEmployeesByManager = () => {
  const query = "SELECT * FROM employees ORDER BY manager_id;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
