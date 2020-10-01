const router = require('express').Router();
const departmentRoutes = require('./departmentRoutes');
const employeeRoutes = require('./employeeRoutes');

router.use('/departments', departmentRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;
