const express = require('express');
const { postRegister, getRegisterPage, getLoginPage, postLogin, getlogout } = require('./controllers/authController');
const { getCatalogPage, getCreatePage, postCrypto, getDetails, getBuy, getDelete, getEdit, postEdit } = require('./controllers/cryptoController');
const { getHomePage, getSearchPage, getErrorPage } = require('./controllers/homeController');
const { isNotLogged, isAlreadyLogged } = require('./middlewares/authMiddleware');
const router = express.Router();
router.get('/', getHomePage);
router.get('/register', isAlreadyLogged, getRegisterPage);
router.get('/login', isAlreadyLogged, getLoginPage);
router.get('/search', isNotLogged, getSearchPage);
router.get('/catalog',  getCatalogPage);
router.get('/create', isNotLogged, getCreatePage);
router.get('/details/:id', getDetails);
router.get('/logout', isNotLogged, getlogout);
router.get('/details/buy/:id',isNotLogged, getBuy);
router.get('/details/delete/:id', isNotLogged, getDelete);
router.get('/details/edit/:id', isNotLogged, getEdit);
router.get('*', getErrorPage);

router.post('/register', postRegister);
router.post('/create', postCrypto);
router.post('/login', postLogin);
router.post('/details/edit/:id', postEdit);

module.exports = router;