const { fetchRoles, insertRole } = require('../model/roleOrm.js');

const getRoles = async (_req, res) => {
  try {
    const roles = await fetchRoles();
    res.json(roles);
  } catch (e) {
    res.status(400).json(e);
  }
};
const addRole = async (req, res) => {
  const userInput = req.body;
  try {
    const result = await insertRole(userInput);
    res.json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
module.exports = {
  getRoles,
  addRole,
};
