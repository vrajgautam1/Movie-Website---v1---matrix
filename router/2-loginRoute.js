const express = require("express");
const router = express.Router();
const loginController = require("../controller/2-loginController");
const adminAuth = require ("../middleware/adminAuth");

//-1 open login page
router.get("/login", loginController.openLoginPage);

//-2 submit form on login page
router.post("/login",loginController.submitFormOnLoginPage);

//- send all the routes to the index.js file
module.exports = router;

