const { Router } = require('express');
const { getRegisterPage, postRegister, getLoginPage, postLogin, getLogout } = require('./controllers/authController');
const { getCreatePage, postCreate, getCatalog, getDetailsPage, getWish, getEditPage, postEdit } = require('./controllers/bookController');
const { getHomePage } = require('./controllers/homeController');

const router = Router();

router.get('/', getHomePage)
router.get('/register', getRegisterPage);
router.post('/register', postRegister);
router.get('/login', getLoginPage);
router.post('/login', postLogin);
router.get('/logout', getLogout);
router.get('/create', getCreatePage);
router.post('/create', postCreate);
router.get('/catalog', getCatalog);
router.get('/catalog/details/:id', getDetailsPage);
router.get('/catalog/details/:id/wish', getWish);
router.get('/catalog/details/:id/edit', getEditPage);
router.post('/catalog/details/:id/edit', postEdit);

module.exports = router;