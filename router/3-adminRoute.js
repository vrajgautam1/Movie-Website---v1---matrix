const express = require("express");
const router = express.Router();
const upload = require("../middleware/imageUpload");
const adminController = require("../controller/3-adminController");
const adminAuth = require("../middleware/adminAuth");

// Apply adminAuth middleware to all routes in this file
router.use(adminAuth);

//-1 open admin panel
router.get("/admin", adminController.openAdminPanel);

//-2 add movie page
router.get("/admin/addMovie", adminController.addMoviePage);

//-3 add movie in the database
router.post("/admin/addMovie", upload, adminController.addMovieInTheDatabase);

//-4 delete movie
router.get("/admin/deleteMovie/:id", adminController.deleteMovie);

//-5 open edit movie page
router.get("/admin/editMovie/:id", adminController.openEditMoviePage);

//-6 edit movie in the database
router.post("/admin/editMovie/:id", upload, adminController.editMovieInTheDatabase);

//-7 open movies in database page
router.get("/admin/movies", adminController.openMoviesInDatabasePage);

//-8 logout
router.get("/admin/logout", adminController.logout);

//- send all the routes to the index.js file
module.exports = router;
