const { Router } = require('express');
const { getRegisterPage, postRegister } = require('./controllers/authController');

const router = Router();

router.get('/register', getRegisterPage);
router.post('/register', postRegister);

module.exports = router;