const { getUserWished } = require("../services/bookService");

exports.getHomePage = (req,res) => {
    res.render('home');
};
exports.getErrorPage = (req,res) => {
    res.render('404');
};
exports.getProfilePage = async(req, res) => {
    const userEmail = req.user?.email;
    const userId = req.user?._id
    const wished = await getUserWished(userId); 
    res.render('profile', {books: wished, userEmail});
};