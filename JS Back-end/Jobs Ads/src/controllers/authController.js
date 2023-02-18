const { register, login } = require("../services/authService");

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
        res.render('register')
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
        console.log(error.message)
        res.render('login')
    }
}
exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};