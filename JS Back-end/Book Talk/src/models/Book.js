const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Username is required!"],
        minLength: [2, "Title should be at least 2 character long!"]
    },
    author: {
        type: String,
        required: [true, "Email is required!"],
        minLength: [5, "The Author should be at least 5 characters!"]
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//gm, "Image should start with http:// or https://!"]
    },
    review: {
        type: String,
        required: true,
        minLength: [10, "The Review should be a minimum of 10 characters long!"]
    },
    genre: {
        type: String,
        required: true,
        minLength: [3, "The Genre should be at least 3 characters!"]
    },
    stars: {
        type: Number,
        required: true,
        min: [1, "Stars should be a positive number between 1 and 5!"],
        max: [5, "Stars should be a positive number between 1 and 5!"]
    },
    wishList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;