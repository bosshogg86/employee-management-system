const { fetchEmployees, insertEmployee } = require('../db/employeeOrm.js');

const getEmployees = async (_req, res) => {
  try {
    const employees = await fetchEmployees();
    res.json(employees);
    // console.table(employees);
  } catch (e) {
    res.status(400).json(e);
  }
};
const addEmployee = async (req, res) => {
  const userInput = req.body;
  try {
    const result = await insertEmployee(userInput);
    res.json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
module.exports = {
  getEmployees,
  addEmployee,
};
