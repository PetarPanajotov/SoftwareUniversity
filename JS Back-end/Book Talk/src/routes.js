const { Router } = require('express');
const { getRegisterPage, postRegister, getLoginPage, postLogin, getLogout } = require('./controllers/authController');
const { getCreatePage, postCreate, getCatalog, getDetailsPage, getWish, getEditPage, postEdit, getDelete } = require('./controllers/bookController');
const { getHomePage, getErrorPage } = require('./controllers/homeController');
const { isAlreadyLogged, isNotLogged, isNotOwner } = require('./middlewares/authMiddlewares');

const router = Router();

router.get('/', getHomePage)

router.get('/register', isAlreadyLogged, getRegisterPage);
router.post('/register', isAlreadyLogged, postRegister);

router.get('/login', isAlreadyLogged, getLoginPage);
router.post('/login',isAlreadyLogged, postLogin);

router.get('/logout',  isNotLogged, getLogout);

router.get('/create', isNotLogged, getCreatePage);
router.post('/create', isNotLogged, postCreate);

router.get('/catalog', getCatalog);

router.get('/catalog/details/:id', getDetailsPage);
router.get('/catalog/details/:id/wish', isNotLogged, getWish);
router.get('/catalog/details/:id/edit', isNotLogged, isNotOwner, getEditPage);
router.post('/catalog/details/:id/edit', isNotLogged, isNotOwner, postEdit);
router.get('/catalog/details/:id/delete', isNotLogged, isNotOwner, getDelete);

router.get('*', getErrorPage);

module.exports = router;