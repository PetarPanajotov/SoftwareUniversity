const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authenticationController = require('./controllers/authenticationController');
const { pagePermissions } = require('./middlewares/authMiddleware');

const Router = express.Router;
const router = Router();

router.get('/', homeController.getHomePage);

router.get('/about', homeController.getAboutPage);

router.get('/create', pagePermissions, cubeController.getCreateCube);
router.post('/create', pagePermissions, cubeController.postCreateCube);

router.get('/details/:id', homeController.getDetails);
router.get('/delete/:id', cubeController.getDelete);
router.get('/edit/:id', cubeController.getEdit);
router.post('/edit/:id', cubeController.postEdit);

router.get('/create/accessory', pagePermissions, accessoryController.getCreateAccessory);
router.post('/create/accessory', pagePermissions, accessoryController.postCreateAcessory);
router.get('/attach/accessory/:id', accessoryController.getAttachAccessory);
router.post('/attach/accessory/:id', accessoryController.postAttachAccessory);

router.get('/login', authenticationController.getLogin);
router.post('/login', authenticationController.postLogin);

router.get('/register', authenticationController.getRegister);
router.post('/register', authenticationController.postRegister);

router.get('/logout', authenticationController.getLogout);


module.exports = router;