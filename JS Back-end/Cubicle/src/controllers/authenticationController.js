const { checkExistingUsername, register, login } = require('../services/authService');

exports.getLogin = (req, res) => {
    res.render('login');
};
exports.getRegister = (req, res) => {
    res.render('register');
};
exports.postRegister = async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        return res.render('404');
    }
    if (await checkExistingUsername(username)) {
        throw 'User already exist';
    }
    await register(username, password);
    res.redirect('/login');
};
exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await login(username, password);
        res.cookie('auth', token, { httpOnly: true });  
    } catch (err) {
        console.log(err.message);
        return res.render('login', { err: err.message });
    }
    res.redirect('/')
}
exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};