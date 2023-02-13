const express = require('express');
const { postRegister, getRegisterPage, getLoginPage, postLogin, getlogout } = require('./controllers/authController');
const { getCatalogPage, getCreatePage, postCrypto, getDetails } = require('./controllers/cryptoController');
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

router.post('/register', postRegister);
router.post('/create', postCrypto);
router.post('/login', postLogin);

module.exports = router;