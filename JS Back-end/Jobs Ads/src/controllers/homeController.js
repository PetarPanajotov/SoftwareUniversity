const { findAllAds } = require("../services/adService");

exports.getHomePage = async(req,res) => {
    const ads = await findAllAds();
    const lastThreeAds = ads.slice(-3).reverse();
    res.render('home', {ads: lastThreeAds});
};
exports.get404Page = (req, res) => {
    res.render('404');
};
exports.getSearchPage = (req, res) => {
    res.render('search');
};
exports.postSearch = async(req, res) => {
    const { query } = req.body;
    let ads = await findAllAds();
    if(query) {
        ads = ads.filter(ad => ad.author.email.toLowerCase().includes(query.toLowerCase()));
    }
    res.render('search', {ads})
}
