const router = require('express').Router();
const { getRoles, addRole } = require('../../../controllers/roleController');

// /api/roles prepended to every route
router.route('/').get(getRoles).post(addRole);

module.exports = router;
