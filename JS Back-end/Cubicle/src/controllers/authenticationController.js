const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.getLogin = (req, res) => {
    res.render('login');
};
exports.getRegister = (req, res) => {
    res.render('register');
};
exports.postRegister = async (req, res) => {
    const {username, password, repeatPassword} = req.body;
    if (password !== repeatPassword) {
        return res.render('404');
    }
    const hash = await bcrypt.hash(password, 10);
    let user = new User({username, password: hash});
    await user.save();
};