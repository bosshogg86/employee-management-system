const { getAllRoles, insertToRoles } = require('./roleQueries');
const connection = require('../config/connection');

const fetchRoles = async () => {
  try {
    const [rows] = await connection.query(getAllRoles);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const insertRole = async userInput => {
  try {
    return await connection.query(insertToRoles, userInput);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchRoles,
  insertRole,
};
