const Crypto = require('../models/Crypto');

exports.getCatalogPage = async (req, res) => {
    const cryptos = await Crypto.find().lean();
    res.render('catalog', { cryptos });

};
exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.getBuy = async (req, res) => {
    const cryptoId = req.params.id;
    const crypto = await Crypto.findById(cryptoId);
    crypto.buy.push(req.user._id);
    await crypto.save()
    res.redirect(`/details/${cryptoId}`);
}

exports.getDetails = async (req, res) => {
    const cryptoId = req.params.id;
    const crypto = await Crypto.findById(cryptoId).populate('buy').lean();
    let isOwner = false;
    let alreadyBought = false;
    for (let index of crypto.buy) {
        if (index._id.valueOf() === req.user._id) {
            alreadyBought = true;
        }
    }
    if (crypto._ownerId._id.valueOf() === req.user._id) {
        isOwner = true;
    };
    res.render('details', { crypto, isOwner, alreadyBought });
}

exports.postCrypto = async (req, res) => {
    const { name, imageUrl, price, description, payment } = req.body;
    const ownerId = req.user._id;
    const crypto = new Crypto({ name, imageUrl, price, description, payment, _ownerId: ownerId });
    await crypto.save();
    res.redirect('/catalog');
};