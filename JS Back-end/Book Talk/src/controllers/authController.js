const { register, login } = require("../services/authService");

exports.getRegisterPage = (req, res) => {
    res.render('register');
};
exports.postRegister = async(req, res) => {
    const { email, username, password, confirmPassword } = req.body;
    await register(username, email, password, confirmPassword );
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
