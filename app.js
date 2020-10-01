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
    const res = await startPrompt();
    console.log(res);
    switch (res.selection) {
      case "View all employees":
        viewEmployees();
        break;
      case "View all employees by department":
        break;
      case "View all employees by manager":
        break;
      case "Add employee":
        break;
      case "Remove employee":
        break;
      case "Update employee role":
        break;
      case "Update employee manager":
        break;
      case "View all roles":
        break;
      case "Add role":
        break;
      case "Remove role":
        break;
      default:
        connection.end();
    }
  } catch (err) {
    console.log(err);
  }
};

const viewEmployees = () => {
  const query = "SELECT * FROM employees;";
  connection.query(query, (err, response) => {
    if (err) throw err;
    console.table(response);
  });
};
