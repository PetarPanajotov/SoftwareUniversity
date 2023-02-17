const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Username is required!"],
    },
    author: {
        type: String,
        required: [true, "Email is required!"],
    },
    imageUrl: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
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