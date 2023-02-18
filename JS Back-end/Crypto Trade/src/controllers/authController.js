const { register, login } = require("../services/authService");
const { getErrorMessage } = require("../utils/errorHandlerUtils");

exports.getRegisterPage = (req, res) => {
    res.render('register');
};
exports.getLoginPage = (req, res) => {
    res.render('login');
};
exports.postRegister = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    try {
        await register(username, email, password, confirmPassword);
        res.redirect('/');
    } catch (err) {
        return res.render('register', {error: getErrorMessage(err)});
    };
};

exports.postLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const token = await login(email, password);
        res.cookie('auth', token, {httpOnly: true});
        res.redirect('/');
    } catch(err) {
        console.log(err.message);
        return res.render('login', {error: err.message});
    }
}
exports.getlogout = async(req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};