const Book = require('../models/Book');

exports.getAllBooks = () => Book.find({}).lean();
exports.createBook = async ({ title, author, imageUrl, review, genre, stars }, ownerId) => {
    const book = new Book({ title, author, imageUrl, review, genre, stars, _ownerId: ownerId});
    await book.save();
};