const jwt = require('../utils/jwtUtils');
const Photo = require('../models/Photo')

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'Xen');

            req.user = decodedToken;
            req.isAuthenticated = true;

            res.locals.username = decodedToken.username;
            res.locals.isAuthenticated = true;
        } catch (error) {
            console.log(error.message);
            res.clearCookie('auth');
            res.redirect('/404')
        };
    };
    next();
};
exports.isNotLogged = (req, res, next) => {
    if(!req.isAuthenticated) {
       return res.redirect('/404');
    };
    next();
};

exports.isAlreadyLogged = (req, res, next) => {
    if(req.isAuthenticated) {
        return res.redirect('/404');
    };
    next();
};

exports.isNotOwner = async(req, res, next) => {
    const photo = await Photo.findById(req.params.id)
    const isOwner = photo.owner.valueOf() === req.user?._id;
    if(!isOwner) {
        return res.redirect('/404');
    };
    next();
};