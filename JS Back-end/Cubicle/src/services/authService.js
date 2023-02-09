const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwtUtils');
    
const checkExistingUsername = (username) => User.findOne({username});

exports.register = async (username, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch. Please try again!');
    };
    if (await checkExistingUsername(username)) {
        throw new Error('User already exist');
    };
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters');
    };
    if (!/^[a-zA-Z0-9]+/gm.test(password)) {
        throw new Error('Password must contain only alphabetic letters and numbers!')
    };
    try {
    const hash = await bcrypt.hash(password, 10);
    let user = new User({username, password: hash});
    await user.save();
    } catch(err) {
        const message = Object.keys(err.errors).map(key => err.errors[key].message);
        throw new Error(message[0]);
    }
};
exports.login = async (username, password) => {
    const user = await checkExistingUsername(username).exec();
    if(!user || !await comparePassword(password, user.password)) {
        throw new Error ('Invalid username or password!');
    };
    const payload = {username: user.username, _id: user._id};
    const secret = 'Xen';
    const token = await jwt.sign(payload, secret, { expiresIn: '2h' });
    return token;
};

async function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};