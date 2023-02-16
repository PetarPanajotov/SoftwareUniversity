const { Router } = require('express');
const { getRegisterPage } = require('./controllers/authController');

const router = Router();

router.get('/register', getRegisterPage);

module.exports = router;