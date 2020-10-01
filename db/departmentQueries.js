const getAllDepartments = 'SELECT * FROM departments;';
const insertToDepartments = 'INSERT INTO departments SET ?;';

module.exports = {
  getAllDepartments,
  insertToDepartments,
};
