const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authenticationController = require('./controllers/authenticationController')

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
router.post('/attach/accessory/:id', accessoryController.postAttachAccessory);

router.get('/login', authenticationController.getLogin);
router.get('/register', authenticationController.getRegister);
router.post('/register', authenticationController.postRegister);


module.exports = router;