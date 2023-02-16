const { register } = require("../services/authService");

exports.getRegisterPage = (req, res) => {
    res.render('register');
};
exports.postRegister = async(req, res) => {
    const { email, username, password, confirmPassword } = req.body;
    await register(username, email, password, confirmPassword );
}