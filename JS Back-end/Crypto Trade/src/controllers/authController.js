const { register } = require("../services/authService");

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
    } catch (err) {
        console.log(err.message);
    }
    res.redirect('/');
};