const router = require('express').Router();
const {
  getEmployees,
  addEmployee,
} = require('../../../controllers/employeeController');

// /api/employees prepended to every route
router.route('/').get(getEmployees).post(addEmployee);

module.exports = router;
