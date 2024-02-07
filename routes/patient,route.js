const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controllers')
const verifyToken  = require("../middlewares/verfiyToken")
const userRoles = require("../utils/userRoles");
const allowedTo = require('../middlewares/allowedTo');

router.route('/') 
            .post(verifyToken, allowedTo(userRoles.MANGER, userRoles.ADMIN), patientController.addPatient);


module.exports = router;
