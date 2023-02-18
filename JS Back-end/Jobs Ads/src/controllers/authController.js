const { register, login } = require("../services/authService");
const { getErrorMessage } = require("../utils/errorHandlerUtils");

exports.getRegisterPage = (req, res) => {
    res.render('register');
};
exports.postRegister = async (req, res) => {
    const { email, password, confirmPassword, description } = req.body;
    try {
        const token = await register(email, password, confirmPassword, description);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.render('register', {error: getErrorMessage(error)});
    }
};
exports.getLoginPage = (req, res) => {
    res.render('login');
};
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await login(email, password);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.render('login', {error: getErrorMessage(error)});
    }
}
exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};