const { findAllAds } = require("../services/adService");

exports.getHomePage = async(req,res) => {
    const ads = await findAllAds();
    const lastThreeAds = ads.slice(-3).reverse();
    res.render('home', {ads: lastThreeAds});
};
exports.get404Page = (req, res) => {
    res.render('404');
}