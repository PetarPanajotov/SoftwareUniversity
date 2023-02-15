const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('../utils/jwtUtils');

const checkExistingUsername = (email) => User.findOne({email});

exports.register = async (username, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error('Password missmatch. Please try again!');
    };
    if (password < 4) {
        throw new Error('Password should be at least 4 character long!');
    };
    password = await bcrypt.hash(password, 10);
    const user = new User({username, email, password});
    await user.save();
};

exports.login = async (email, password) => {
    const user = await checkExistingUsername(email).exec();

    if(!user || !await comparePassword(password, user.password)) {
        throw new Error ('Invalid email or password!');
    };

    const payload = {email: user.email, username: user.username, _id: user._id};
    const secret = 'Xen';
    const token = await jwt.sign(payload, secret, { expiresIn: '2h' });
    return token;
};

async function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};