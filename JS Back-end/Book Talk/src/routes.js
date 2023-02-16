const { Router } = require('express');
const { getRegisterPage, postRegister, getLoginPage, postLogin } = require('./controllers/authController');
const { getHomePage } = require('./controllers/homeController');

const router = Router();

router.get('/', getHomePage)
router.get('/register', getRegisterPage);
router.post('/register', postRegister);
router.get('/login', getLoginPage);
router.post('/login', postLogin);

module.exports = router;