const { register, login } = require("../services/authService");

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

exports.postLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const token = await login(email, password);
        res.cookie('auth', token, {httpOnly: true});
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/')
}
exports.getlogout = async(req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};