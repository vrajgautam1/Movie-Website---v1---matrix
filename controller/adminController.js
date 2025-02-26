const movieModel = require("../models/movieModel");
const fs = require("fs");
const path = require("path");
module.exports.openAdminPanel = async(req,res)=>{
    const movies = await movieModel.find({});
    return res.render("./pages/adminPanel",{movies});
}

module.exports.addMoviePage = (req,res)=>{
    return res.render("./pages/addMovie");
}

module.exports.addMovieInTheDatabase = async(req,res)=>{
    try{
        await movieModel.create({...req.body,image: req.file.filename});
        return res.redirect("/admin");
    }catch(err){
        console.log(err);
    }
}

module.exports.deleteMovie = async(req,res)=>{
    try{
        console.log(req.params.id);
        const movie = await movieModel.findById(req.params.id);
        const imagePath = path.join(__dirname,`../uploads/`, movie.image);
        console.log(imagePath);

         // Delete the movie from the database
         await movieModel.findByIdAndDelete(req.params.id);

         fs.unlink(imagePath, (err) => {
            if (err) {
                console.log("Error deleting image file:", err);
            }});

        return res.redirect("/admin");

    }catch(err){
        console.log(err);
    }
}

module.exports.openEditMoviePage = async(req,res)=>{
    try{
        const movie = await movieModel.findById(req.params.id);
        return res.render("./pages/edit",{movie});
    }catch(err){
        console.log(err);
    }
}

module.exports.editMovieInTheDatabase = async(req,res)=>{
    try{
        await movieModel.findByIdAndUpdate(req.params.id,req.body);
        return res.redirect("/admin");
    }
    catch(err){
        console.log(err);
    }   
}

module.exports.openMoviesInDatabasePage = async(req,res)=>{
    try{
        const movies = await movieModel.find({});
        return res.render("./pages/moviesDatabase",{movies});
    }catch(err){
        console.log(err);
    }
}