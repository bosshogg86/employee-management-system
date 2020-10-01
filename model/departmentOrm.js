const {
  getAllDepartments,
  insertToDepartments,
} = require('./departmentQueries');
const connection = require('../config/connection');

const fetchDepartments = async () => {
  try {
    const [rows] = await connection.query(getAllDepartments);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const insertDepartment = async userInput => {
  try {
    return await connection.query(insertToDepartments, userInput);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchDepartments,
  insertDepartment,
};
