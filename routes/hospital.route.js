const express = require('express');
const router = express.Router();
//const hospitalController = require('../controllers/hospitalController');
const hospitalController = require('../controllers/hospital.controllers');
const verifyToken  = require("../middlewares/verfiyToken")
const userRoles = require("../utils/userRoles");
const allowedTo = require('../middlewares/allowedTo');
// const { verify } = require('jsonwebtoken');

router.route('/')
        .post(verifyToken, allowedTo(userRoles.MANGER), hospitalController.addHospital);



module.exports = router;
