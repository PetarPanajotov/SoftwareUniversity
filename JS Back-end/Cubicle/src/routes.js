const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authenticationController = require('./controllers/authenticationController');
const { isNotLogged, isAlreadyLogged } = require('./middlewares/authMiddleware');

const Router = express.Router;
const router = Router();

router.get('/', homeController.getHomePage);

router.get('/about', homeController.getAboutPage);

router.get('/create', isNotLogged, cubeController.getCreateCube);
router.post('/create', isNotLogged, cubeController.postCreateCube);

router.get('/details/:id', homeController.getDetails);

router.get('/delete/:id', isNotLogged, cubeController.getDelete);
router.post('/delete/:id', isNotLogged, cubeController.postDelete);

router.get('/edit/:id', isNotLogged, cubeController.getEdit);
router.post('/edit/:id', isNotLogged, cubeController.postEdit);

router.get('/create/accessory', isNotLogged, accessoryController.getCreateAccessory);
router.post('/create/accessory', isNotLogged, accessoryController.postCreateAcessory);
router.get('/attach/accessory/:id', isNotLogged, accessoryController.getAttachAccessory);
router.post('/attach/accessory/:id', isNotLogged, accessoryController.postAttachAccessory);

router.get('/login', isAlreadyLogged, authenticationController.getLogin);
router.post('/login', isAlreadyLogged, authenticationController.postLogin);

router.get('/register', isAlreadyLogged, authenticationController.getRegister);
router.post('/register', isAlreadyLogged, authenticationController.postRegister);

router.get('/logout', isNotLogged, authenticationController.getLogout);


module.exports = router;