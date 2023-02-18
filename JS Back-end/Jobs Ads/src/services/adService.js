const Ad = require('../models/Ad');
const User = require('../models/User');

exports.findAllAds = () => Ad.find({}).populate('applied').populate('author').lean();
exports.findOneAd = (adId) => Ad.findById(adId).populate('author').populate('applied').lean();
exports.apply = (adId, userId) => Ad.findByIdAndUpdate(adId, {$push: {applied: userId}}).populate('applied').lean();
exports.deleteAd = async(adId, authorId) => {
    await Ad.findByIdAndDelete(adId);
    await User.findByIdAndUpdate(authorId, { $pull: { myAds: adId}});
};
exports.editAd = (adId, data) => Ad.findByIdAndUpdate(adId, data, {runValidators: true});
exports.create = async({headline, location, companyName, companyDescription}, ownerId) => {
    const ad = new Ad({headline, location, companyName, companyDescription, author: ownerId})
    await ad.save();
    await User.findByIdAndUpdate(ownerId, {$push: {myAds: ad._id}}).populate('myAds');
};