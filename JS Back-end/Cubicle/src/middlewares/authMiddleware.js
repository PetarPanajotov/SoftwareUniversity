const jwt = require('../utils/jwtUtils');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'Xen');

            req.user = decodedToken;
            req.isAuthenticated = true;
        } catch (err) {
            console.log(err.message);
            res.clearCookie('auth');
            // res.redirect('/404') will add 404 page.
        };
    };
    next();
};

exports.pagePermissions = (req,res,next) => {
    if(!req.isAuthenticated) {
        res.redirect('/login');
    }
    next();
};