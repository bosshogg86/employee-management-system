const getAllEmployees = 'SELECT * FROM employees;';
const insertToEmployees = 'INSERT INTO employees SET ?;';

module.exports = {
  getAllEmployees,
  insertToEmployees,
};
