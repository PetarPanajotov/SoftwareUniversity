const Book = require('../models/Book');

exports.getAllBooks = () => Book.find({}).lean();
exports.getOneBook = (bookId) => Book.findById(bookId).lean();
exports.getOneAndUpdate = (bookId, userId) => Book.findByIdAndUpdate(bookId, {$push: {wishList: userId}});
exports.edit = (bookId, data) => Book.findByIdAndUpdate(bookId, data, {runValidators: true});
exports.deleteBook = (bookId) => Book.findByIdAndDelete(bookId);
exports.createBook = async ({ title, author, imageUrl, review, genre, stars }, ownerId) => {
    const book = new Book({ title, author, imageUrl, review, genre, stars, _ownerId: ownerId});
    await book.save();
};