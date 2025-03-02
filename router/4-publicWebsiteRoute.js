const express = require('express');
const router = express.Router();
const publicWebsiteController = require('../controller/4-publicWebsiteController');
const redirectToHomePage = require("../middleware/redirectToHomePage");

// const detectCountry = require('../middleware/detectCountry');
// router.use(detectCountry);
//-1 open the homepage
router.use('/', redirectToHomePage);
router.get('/home',  publicWebsiteController.wesbiteHomePage);

//-2 open the about page
router.get('/home/about', publicWebsiteController.openAboutPage);

//-3 open the movie review page
router.get('/home/movieReview/:category?', publicWebsiteController.openMovieReviewPage);

//-4 open the join us page
router.get('/home/joinUs', publicWebsiteController.openJoinUsPage);

//-5 open the contact us page
router.get('/home/contact', publicWebsiteController.openContactUsPage);

//-6 open the single movie page
router.get('/home/SingleMoviePage/:id', publicWebsiteController.openSingleMoviePage);

module.exports = router;