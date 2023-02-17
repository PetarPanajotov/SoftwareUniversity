const { createBook, getAllBooks, getOneBook, getOneAndUpdate } = require("../services/bookService");

exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.getCatalog = async(req, res) => {
    const books =  await getAllBooks();
    res.render('catalog', {books});

};
exports.getDetailsPage = async(req, res) => {
    const bookId = req.params.id;
    const book = await getOneBook(bookId);
    const isOwner = book._ownerId.valueOf() === req.user?._id;
    const isAlreadyWished = book.wishList.some(id => id == req.user?._id);
    res.render('details', {book, isOwner, isAlreadyWished: !isAlreadyWished});
}
exports.getWish = async(req, res) => {
    const bookId = req.params.id;
    const userId = req.user?._id;
    await getOneAndUpdate(bookId, userId);
    res.redirect(`/catalog/details/${bookId}`)
}

exports.postCreate = async(req, res) => {
    const data = req.body;
    const ownerId = req.user._id;
    await createBook(data, ownerId);
    res.redirect('/catalog');
};