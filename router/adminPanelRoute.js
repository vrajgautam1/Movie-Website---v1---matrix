const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");

//-1 open admin panel
router.get("/adminPanel",adminController.openAdminPanel);