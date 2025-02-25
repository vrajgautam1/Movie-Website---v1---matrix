const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const dbConnection = require("./config/dbconnection");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//-1 signup route
const signupRoute = require("./router/signupRoute");
app.use(signupRoute);

//-2 login route
const loginRoute = require("./router/loginRoute");
app.use(loginRoute);



const port = 3000||process.env.PORT;

dbConnection();
app.listen(port, (err) => {
    if(!err){
        console.log("server is running successfully");
        console.log(`http://localhost:${port}`);
    }
})