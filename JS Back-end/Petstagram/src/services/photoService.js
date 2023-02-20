const Photo = require('../models/Photo');

exports.getAllPhotos = () => Photo.find().populate('owner').lean();
exports.getOnePhoto = (photoId) => Photo.findById(photoId).populate('owner').populate('commentList.userId').lean();
exports.deletePhoto = (photoId) => Photo.findByIdAndDelete(photoId);
exports.editPhoto = (photoId, name, age, description, location, image) => Photo.findByIdAndUpdate(photoId, {name, age, description, location, image}, {runValidators: true});
exports.commentPhoto = (photoId, userId, comment) => Photo.findByIdAndUpdate(photoId, {$push: {commentList: {comment, userId}}});
exports.createPhoto = async(name, age, description, location, image, owner) => {
    const photo = new Photo({name, age, description, location, image, owner});
    await photo.save();
}