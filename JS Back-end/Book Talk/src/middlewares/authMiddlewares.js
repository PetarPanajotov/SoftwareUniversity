const jwt = require('../utils/jwtUtils');
const Book = require('../models/Book');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'Xen');

            req.user = decodedToken;
            req.isAuthenticated = true;

            res.locals.username = decodedToken.username;
            res.locals.isAuthenticated = true;
        } catch (err) {
            console.log(err.message);
            res.clearCookie('auth');
            res.render('404')
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
    const book = await Book.findById(req.params.id)
    const isOwner = book._ownerId.valueOf() === req.user?._id;
    if(!isOwner) {
        return res.redirect('/404');
    };
    next();
};
exports.isOwner = async(req, res, next) => {
    const book = await Book.findById(req.params.id)
    const isOwner = book._ownerId.valueOf() === req.user?._id;
    if(isOwner) {
        return res.redirect('/404');
    };
    next();
};