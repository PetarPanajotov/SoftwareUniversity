const express = require('express');
const { getRegister, postRegister } = require('./controllers/authController');
const { getHomePage } = require('./controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/register', getRegister);
router.post('/register', postRegister);

module.exports = router;