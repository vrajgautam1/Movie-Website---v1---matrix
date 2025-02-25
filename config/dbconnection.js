const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://gautamvraj1999:12345@cluster0.e56wc.mongodb.net/movieProject1");
        console.log("Database connected successfully");
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = dbConnection;