const { register, login } = require("../services/authService");
const { getErrorMessage } = require("../utils/errorHandlerUtils");

exports.getRegisterPage = (req, res) => {
    res.render('register');
};
exports.postRegister = async(req, res) => {
    const { email, username, password, confirmPassword } = req.body;
    try {
    const token = await register(username, email, password, confirmPassword );
    res.cookie('auth', token, {httpOnly: true});
    res.redirect('/'); 
    } catch(error) {
        res.render('register', {error: getErrorMessage(error)});
    };
};
exports.getLoginPage = (req, res) => {
    res.render('login');
};
exports.postLogin = async(req, res) => {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.cookie('auth', token, {httpOnly: true});
    res.redirect('/');
}
exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
}
