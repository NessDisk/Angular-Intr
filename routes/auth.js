const express = require("express");
const router = express.Router()
const {validatorRegister, validatorLoguin} = require("../validators/auth")
const {matchedData} = require("express-validator")
const {encrypt, compare} = require("../utils/handlePassword");
const {usersModel} = require("../models/index")
const  {tokenSing} = require("../utils/handleJwt")
const {registerCtrl, loginCtrl}  = require("../controllers/auth")

//lista de items
router.post("/register",validatorRegister, registerCtrl)
router.post("/login",validatorLoguin, loginCtrl)


module.exports = router