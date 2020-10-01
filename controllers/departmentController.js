const {
  fetchDepartments,
  insertDepartment,
} = require('../model/departmentOrm.js');

const getDepartments = async (_req, res) => {
  try {
    const departments = await fetchDepartments();
    res.json(departments);
  } catch (e) {
    res.status(400).json(e);
  }
};
const addDepartment = async (req, res) => {
  const userInput = req.body;
  try {
    const result = await insertDepartment(userInput);
    res.json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
module.exports = {
  getDepartments,
  addDepartment,
};
