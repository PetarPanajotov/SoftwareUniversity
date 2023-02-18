const { create, findAllAds, findOneAd, apply, deleteAd, editAd } = require("../services/adService");
const { getErrorMessage } = require("../utils/errorHandlerUtils");

exports.getCreatePage = (req, res) => {
    res.render('create');
};
exports.postCreate = async (req, res) => {
    const data = req.body;
    const ownerId = req.user._id;
    try {
        await create(data, ownerId);
        res.redirect('/catalog');
    } catch (error) {
        res.render('create', { error: getErrorMessage(error) });
    }
};
exports.getCatalogPage = async (req, res) => {
    const ads = await findAllAds();
    res.render('all-ads', { ads });
};
exports.getDetailsPage = async (req, res) => {
    const adId = req.params.id;
    const ad = await findOneAd(adId);
    const isOwner = ad.author?._id.valueOf() === req.user?._id;
    const appliedCount = ad.applied.length;
    const isNotApplied = ad.applied.some(x => x._id == req.user?._id);
    res.render('details', { ad, isOwner, appliedCount, isNotApplied: !isNotApplied });
};
exports.getApply = async (req, res) => {
    const adId = req.params.id;
    const userId = req.user?._id;
    await apply(adId, userId);
    res.redirect(`/catalog/details/${adId}`);
};
exports.getDeleteAd = async (req, res) => {
    const adId = req.params.id;
    await deleteAd(adId);
    res.redirect('/catalog');
};
exports.getEditAd = async (req, res) => {
    const adId = req.params.id;
    const ad = await findOneAd(adId);
    res.render('edit', { ad });
};
exports.postEditAd = async (req, res) => {
    const adId = req.params.id;
    const data = req.body;
    try {
        await editAd(adId, data);
        res.redirect(`/catalog/details/${adId}`);
    } catch (error) {
        res.render('edit', {ad: data, error: getErrorMessage(error)});
    }
};
