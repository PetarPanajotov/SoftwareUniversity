const Crypto = require('../models/Crypto');

exports.getCatalogPage = async (req, res) => {
    const cryptos = await Crypto.find().lean();
    res.render('catalog', {cryptos});

};
exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.getDetails = async(req, res) => {
    const cryptoId = req.params.id;
    const crypto = await Crypto.findById(cryptoId).lean();
    res.render('details', {crypto});
}

exports.postCrypto = async (req, res) => {
    const { name, imageUrl, price, description, payment } = req.body;
    const crypto = new Crypto({ name, imageUrl, price, description, payment});
    await crypto.save();
    res.redirect('/catalog');
};