const { register } = require("../services/authService");

exports.getRegister = (req, res) => {
    res.render('register')
}
exports.postRegister = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    try {
        await register(username, email, password, confirmPassword);
    } catch (err) {
        console.log(err)
    }
    res.redirect('/')
};