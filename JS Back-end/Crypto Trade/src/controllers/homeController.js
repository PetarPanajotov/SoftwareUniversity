exports.getHomePage = (req, res) => {
    res.render('home');
};
exports.getSearchPage = (req, res) => {
    res.render('search')
}
exports.getErrorPage = (req, res) => {
    res.render('404')
}