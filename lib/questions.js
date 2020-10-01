// const validator = require("validator");

const questions = {
  // Manager Questions
  start: {
    type: "list",
    name: "selection",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "View all employees by department",
      "View all employees by manager",
      "Add employee",
      "Remove employee",
      "Update employee role",
      "Update employee manager",
      "View all roles",
      "Add role",
      "Remove role",
    ],
  },
};

module.exports = { questions };
