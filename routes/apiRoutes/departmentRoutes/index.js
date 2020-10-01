const router = require('express').Router();
const {
  getDepartments,
  addDepartment,
} = require('../../../controllers/departmentController');

// /api/department prepended to every route
router.route('/').get(getDepartments).post(addDepartment);

module.exports = router;
