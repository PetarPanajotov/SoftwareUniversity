const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const Router = express.Router;
const router = Router();

router.get('/', homeController.getHomePage)

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', cubeController.getCreateCube);

module.exports = router;