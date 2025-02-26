const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortintro: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    premiere: {
        type: Date,
        required: true
    },
    category: {
        type: [String],
        enum: ['Action', 'Drama', 'Fantasy', 'Horror', 'Adventure'],
        required: true
    },
    directors: {
        type: String,
        required: true
    },
    writers: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    longintro: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);