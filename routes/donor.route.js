const express = require('express');
const router = express.Router();
const donorcontroller = require('../controllers/donor.controller')
const verifyToken  = require("../middlewares/verfiyToken")
const userRoles = require("../utils/userRoles");
const allowedTo = require('../middlewares/allowedTo');

router.route('/')
.post(verifyToken, allowedTo(userRoles.MANGER, userRoles.ADMIN),donorcontroller.addDonor);

module.exports = router;
