const express = require('express');
const router = express.Router();
const publicWebsiteController = require('../controller/publicWebsiteController');
const redirectToHomePage = require("../middleware/redirectToHomePage");

//-1 open the homepage
router.use('/', redirectToHomePage);

router.get('/homepage',  publicWebsiteController.wesbiteHomePage);

module.exports = router;