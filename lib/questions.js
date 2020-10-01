// const validator = require("validator");

const questions = {
  // Manager Questions
  start: {
    type: "list",
    name: "selection",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "View all employees by manager",
      "Add department",
      "Add role",
      "Add employee",
      "Update employee role",
      "Update employee manager",
      "Remove department",
      "Remove role",
      "Remove employee",
    ],
  },
};

module.exports = { questions };
