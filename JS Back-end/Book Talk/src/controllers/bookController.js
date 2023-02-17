const { createBook, getAllBooks } = require("../services/bookService");

exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.getCatalog = async(req, res) => {
    const books =  await getAllBooks();
    res.render('catalog', {books});

}
exports.postCreate = async(req, res) => {
    const data = req.body;
    const ownerId = req.user._id;
    await createBook(data, ownerId);
    res.redirect('/catalog');
}