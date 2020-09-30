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
  } catch (err) {
    console.log(err);
  }
};
