const movieModel = require("../models/movieModel");
const fs = require("fs");
const path = require("path");

//1-open the homepage
module.exports.wesbiteHomePage = async(req,res)=>{
    const movies = await movieModel.find({});
    return res.render("./pages/home",{movies, currentPath:req.path});
}

//2-open the about page
module.exports.openAboutPage = (req,res)=>{
    return res.render("./pages/about", {currentPath:req.path});
}

//3-open the movie review page
module.exports.openMovieReviewPage = async (req, res) => {
    try {
        let filter = {};

        if (req.params.category) {
            filter.category = { $in: [req.params.category] }; // Matches if category array contains the selected category
        }

        const movies = await movieModel.find(filter);

        res.render("./pages/movieReviews", { movies, currentPath: req.path });
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
};


//4-open the join us page
module.exports.openJoinUsPage = (req,res)=>{
    return res.render("./pages/joinUs", {currentPath:req.path});
}

//5-open the contact us page
module.exports.openContactUsPage = (req,res)=>{
    return res.render("./pages/contact", {currentPath:req.path});
}

//6-open the movie details page
module.exports.openSingleMoviePage = async(req,res)=>{
    const {id} = req.params;
    try{    
        const movie = await movieModel.findById(id);
        console.log(movie);
        return res.render("./pages/singleMoviePage",{movie, currentPath:null});
    }catch(err){
        console.log(err);
        return res.redirect("/");
    }
}