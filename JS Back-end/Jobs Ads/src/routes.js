const { Router } = require('express');
const { getCreatePage, postCreate, getCatalogPage, getDetailsPage, getApply, getDeleteAd, getEditAd, postEditAd } = require('./controllers/adController');
const { getRegisterPage, postRegister, getLoginPage, postLogin, getLogout } = require('./controllers/authController');
const { getHomePage, get404Page } = require('./controllers/homeController');
const { isAlreadyLogged, isNotLogged, isNotOwner, isAlreadyOwner } = require('./middlewares/authMiddlewares');

const router = Router();

router.get('/', getHomePage);

router.get('/register', isAlreadyLogged, getRegisterPage);
router.post('/register', isAlreadyLogged, postRegister);

router.get('/login', isAlreadyLogged, getLoginPage);
router.post('/login', isAlreadyLogged, postLogin);

router.get('/logout', isNotLogged, getLogout);

router.get('/create', isNotLogged, getCreatePage);
router.post('/create', isNotLogged, postCreate);

router.get('/catalog', getCatalogPage);
router.get('/catalog/details/:id', getDetailsPage);

router.get('/catalog/details/:id/apply', isNotLogged, isAlreadyOwner, getApply);
router.get('/catalog/details/:id/delete', isNotLogged, isNotOwner, getDeleteAd);

router.get('/catalog/details/:id/edit', isNotLogged, isNotOwner, getEditAd);
router.post('/catalog/details/:id/edit', isNotLogged, isNotOwner, postEditAd);
router.get('*', get404Page)
module.exports = router;