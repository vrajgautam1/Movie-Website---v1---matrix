const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const dbConnection = require("./config/dbconnection");
const cookieParser = require("cookie-parser");

//-for adding files in the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

//-set the view engine and views folder
app.set("view engine", "ejs");
app.set("views", "views");

//-body parser
app.use(bodyParser.urlencoded({ extended: true }));

//-static files
app.use(express.static(path.join(__dirname, "public")));

//////////////////////////ROUTES//////////////////////////

//-1 signup route
const signupRoute = require("./router/1-signupRoute");
app.use(signupRoute);

//-2 login route
const loginRoute = require("./router/2-loginRoute");
app.use(loginRoute);

//-4 public website route
const publicWebsiteRoute = require("./router/4-publicWebsiteRoute");
app.use(publicWebsiteRoute);

//-Cookie parser
app.use(cookieParser()); // Enables cookie parsing globally

// -3 admin panel route
const adminRoute = require("./router/3-adminRoute");
app.use(adminRoute);

//////////////////////////////////////////////////////////

//- App.listen to start the server
const port = 3000||process.env.PORT;

dbConnection();
app.listen(port, (err) => {
    if(!err){
        console.log("server is running successfully");
        console.log(`http://localhost:${port}`);
    }
})