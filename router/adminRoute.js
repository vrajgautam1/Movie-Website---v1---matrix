const express = require("express");
const router = express.Router();
const upload = require("../middleware/imageUpload");

const adminController = require("../controller/adminController");

//-1 open admin panel
router.get("/admin",adminController.openAdminPanel);

//-2 add movie page
router.get("/admin/addMovie",adminController.addMoviePage);

//-3 add movie in the database
router.post("/admin/addMovie",upload, adminController.addMovieInTheDatabase);

//-4 delete movie
router.get("/admin/deleteMovie/:id",adminController.deleteMovie);

//-5 open edit movie page
router.get("/admin/editMovie/:id",adminController.openEditMoviePage);

//-6 edit movie in the database
router.post("/admin/editMovie/:id",upload, adminController.editMovieInTheDatabase); //The issue was caused by multipart/form-data, which express.urlencoded() doesn't parse. So, we need to use multer to parse the form data.

//-7 open movies in database page
router.get("/admin/movies",adminController.openMoviesInDatabasePage);

//- send all the routes to the index.js file
module.exports = router;