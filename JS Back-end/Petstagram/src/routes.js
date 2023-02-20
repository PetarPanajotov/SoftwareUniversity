const { Router } = require('express');
const { getRegisterPage, postRegister, getLoginPage, postLogin, getLogout } = require('./controllers/authController');
const { getHomePage, get404Page } = require('./controllers/homeController');
const { getCreatePhotoPage, postCreatePhoto, getCatalogPage, getDetailsPage, postCommentPhoto, getDeletePhoto, getEditPhotoPage, postEditPhoto, getProfilePage } = require('./controllers/photoController');
const { isAlreadyLogged, isNotLogged, isNotOwner } = require('./middlewares/authMiddlewares');

const router = Router();

router.get('/', getHomePage)
router.get('/register', isAlreadyLogged, getRegisterPage);
router.post('/register', isAlreadyLogged, postRegister);
router.get('/login', isAlreadyLogged, getLoginPage);
router.post('/login', isAlreadyLogged, postLogin);
router.get('/logout', isNotLogged, getLogout);

router.get('/create', isNotLogged, getCreatePhotoPage);
router.post('/create', isNotLogged, postCreatePhoto);

router.get('/profile', isNotLogged, getProfilePage);

router.get('/catalog', getCatalogPage);
router.get('/catalog/details/:id', getDetailsPage);
router.get('/catalog/details/:id/delete', isNotLogged, isNotOwner, getDeletePhoto);

router.get('/catalog/details/:id/edit',isNotLogged, isNotOwner, getEditPhotoPage);
router.post('/catalog/details/:id/edit',isNotLogged, isNotOwner, postEditPhoto);

router.post('/catalog/details/:id/comment',isNotLogged, postCommentPhoto);
router.get('*', get404Page);

module.exports = router;