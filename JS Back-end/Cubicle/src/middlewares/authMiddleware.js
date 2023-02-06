const jwt = require('../utils/jwtUtils');

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
            res.render('404') //will add 404 page.
        };
    };
    next();
};

exports.isNotLogged = (req, res, next) => {
    if(!req.isAuthenticated) {
       return res.redirect('/login');
    };
    next();
};

exports.isAlreadyLogged = (req, res, next) => {
    if(req.isAuthenticated) {
        return res.redirect('/');
    };
    next();
};