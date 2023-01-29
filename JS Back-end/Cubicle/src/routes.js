const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');

const Router = express.Router;
const router = Router();

router.get('/', homeController.getHomePage);

router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);

router.get('/details/:id', homeController.getDetails);

router.get('/create/accessory', accessoryController.getCreateAccessory);
router.post('/create/accessory', accessoryController.postCreateAcessory);
router.get('/attach/accessory/:id', accessoryController.getAttachAccessory);
module.exports = router;