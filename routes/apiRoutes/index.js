const router = require('express').Router();
const apiRoutes = require('./departmentRoutes');

router.use('/departments', apiRoutes);

module.exports = router;
