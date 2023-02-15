const express = require('express');
const { postRegister, getRegisterPage, getLoginPage, postLogin, getlogout } = require('./controllers/authController');
const { getCatalogPage, getCreatePage, postCrypto, getDetails, getBuy, getDelete, getEdit, postEdit } = require('./controllers/cryptoController');
const { getHomePage, getSearchPage } = require('./controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/register', getRegisterPage);
router.get('/login', getLoginPage);
router.get('/search', getSearchPage);
router.get('/catalog', getCatalogPage);
router.get('/create', getCreatePage);
router.get('/details/:id', getDetails);
router.get('/logout', getlogout);
router.get('/details/buy/:id', getBuy);
router.get('/details/delete/:id', getDelete);
router.get('/details/edit/:id', getEdit);

router.post('/register', postRegister);
router.post('/create', postCrypto);
router.post('/login', postLogin);
router.post('/details/edit/:id', postEdit);

module.exports = router;