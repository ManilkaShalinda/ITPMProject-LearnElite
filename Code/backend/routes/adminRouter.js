const express = require('express');
const router = express.Router();
const {registerAdmin, authAdmin} = require('../controllers/adminControllers')



router.route('/').post(registerAdmin);
router.route('/login').post(authAdmin);


module.exports = router;