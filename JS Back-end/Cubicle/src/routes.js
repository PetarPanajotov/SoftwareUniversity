const express = require('express');
const cubeController = require('./controllers/cubeController');

const Router = express.Router;
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', cubeController.getCreateCube);

module.exports = router;