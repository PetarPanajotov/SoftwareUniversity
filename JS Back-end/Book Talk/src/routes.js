const { Router } = require('express');
const { getRegisterPage, postRegister, getLoginPage, postLogin, getLogout } = require('./controllers/authController');
const { getHomePage } = require('./controllers/homeController');

const router = Router();

router.get('/', getHomePage)
router.get('/register', getRegisterPage);
router.post('/register', postRegister);
router.get('/login', getLoginPage);
router.post('/login', postLogin);
router.get('/logout', getLogout)


module.exports = router;