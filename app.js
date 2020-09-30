const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");

let connection;
if (process.env.NODE_ENV === "production") {
  connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employeeDB",
  });
}
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
  //   runSearch();
});
