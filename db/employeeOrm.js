const { getAllEmployees, insertToEmployees } = require('./employeeQueries');
const connection = require('../config/connection');

const fetchEmployees = async () => {
  try {
    return await connection.query(getAllEmployees);
    // return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const insertEmployee = async userInput => {
  try {
    return await connection.query(insertToEmployees, userInput);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchEmployees,
  insertEmployee,
};
