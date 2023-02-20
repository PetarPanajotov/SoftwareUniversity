const { createPhoto, getAllPhotos, getOnePhoto, commentPhoto, deletePhoto, editPhoto } = require("../services/photoService");
const { getErrorMessage } = require("../utils/errorHandlerUtils");

exports.getCreatePhotoPage = (req, res) => {
    res.render('create');
};
exports.postCreatePhoto = async (req, res) => {
    const { name, age, description, location, image } = req.body;
    const owner = req.user?._id;
    try {
        await createPhoto(name, age, description, location, image, owner);
        res.redirect('/catalog')
    } catch (error) {
        res.render('create', { error: getErrorMessage(error) });
    }
};
exports.getCatalogPage = async (req, res) => {
    const photos = await getAllPhotos();
    res.render('catalog', { photos });
};
exports.getDetailsPage = async (req, res) => {
    const photoId = req.params.id;
    const photo = await getOnePhoto(photoId);
    const isOwner = req.user?._id === photo.owner._id.valueOf();
    res.render('details', { photo, isOwner });
};
exports.postCommentPhoto = async (req, res) => {
    const { comment } = req.body;
    const photoId = req.params.id;
    const userId = req.user?._id;
    await commentPhoto(photoId, userId, comment);
    res.redirect(`/catalog/details/${photoId}`);
};
exports.getEditPhotoPage = async (req, res) => {
    const photoId = req.params.id;
    const photo = await getOnePhoto(photoId);
    res.render('edit', { photo });
};
exports.postEditPhoto = async (req, res) => {
    const { name, age, description, location, image } = req.body;
    const photoId = req.params.id;
    const photo = await getOnePhoto(photoId);
    try {
        await editPhoto(photoId, name, age, description, location, image);
        res.redirect(`/catalog/details/${photoId}`);
    } catch (error) {
        res.render('edit', { photo, error: getErrorMessage(error) });
    }
};
exports.getDeletePhoto = async (req, res) => {
    const photoId = req.params.id;
    await deletePhoto(photoId);
    res.redirect('/catalog');
};
exports.getProfilePage = async(req, res) => {
    const user = req.user;
    let photos = await getAllPhotos();
    photos = photos.filter(photo => photo.owner._id.valueOf() === user._id)
    
    res.render('profile', {user, photos});
}