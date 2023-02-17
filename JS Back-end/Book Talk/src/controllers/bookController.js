const { createBook } = require("../services/bookService");

exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.postCreate = async(req, res) => {
    const data = req.body;
    const ownerId = req.user._id;
    await createBook(data, ownerId);
    res.redirect('/');
}