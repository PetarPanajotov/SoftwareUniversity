const { createBook, getAllBooks, getOneBook, getOneAndUpdate, edit, deleteBook } = require("../services/bookService");
const { getErrorMessage } = require("../utils/errorHandlerUtils");

exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.getCatalog = async (req, res) => {
    const books = await getAllBooks();
    res.render('catalog', { books });

};
exports.getDetailsPage = async (req, res) => {
    const bookId = req.params.id;
    const book = await getOneBook(bookId);
    const isOwner = book._ownerId.valueOf() === req.user?._id;
    const isAlreadyWished = book.wishList.some(id => id == req.user?._id);
    res.render('details', { book, isOwner, isAlreadyWished: !isAlreadyWished });
};
exports.getWish = async (req, res) => {
    const bookId = req.params.id;
    const userId = req.user?._id;
    await getOneAndUpdate(bookId, userId);
    res.redirect(`/catalog/details/${bookId}`);
};
exports.getEditPage = async (req, res) => {
    const bookId = req.params.id;
    const book = await getOneBook(bookId);
    res.render('edit', { book });
};
exports.postEdit = async (req, res) => {
    const bookId = req.params.id;
    const { title, author, imageUrl, review, genre, stars } = req.body;
    try {
        await edit(bookId, { title, author, imageUrl, review, genre, stars });;
        res.redirect(`/catalog/details/${bookId}`);
    } catch (error) {
        res.render('edit', { book: req.body, error: getErrorMessage(error) });
    };
};
exports.getDelete = async (req, res) => {
    const bookId = req.params.id;
    await deleteBook(bookId);
    res.redirect('/catalog');
}

exports.postCreate = async (req, res) => {
    const data = req.body;
    const ownerId = req.user._id;
    try {
        await createBook(data, ownerId);
        res.redirect('/catalog');
    } catch (error) {
        res.render('create', { error: getErrorMessage(error) });
    };
};