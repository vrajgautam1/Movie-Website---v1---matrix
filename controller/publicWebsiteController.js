const movieModel = require("../models/movieModel");
const fs = require("fs");
const path = require("path");

module.exports.wesbiteHomePage = async(req,res)=>{
    const movies = await movieModel.find({});
    return res.render("./pages/home",{movies});
}

