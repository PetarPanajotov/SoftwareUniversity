const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('../utils/jwtUtils');

const checkExistingUsername = (email) => User.findOne({email});

exports.register = async (email, password, confirmPassword, description) => {
    if (password !== confirmPassword) {
        throw new Error('Password missmatch. Please try again!');
    };
    if (password < 5) {
        throw new Error('Password should be at least 4 character long!');
    };
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new User({email, password: hashedpassword, description});
    await user.save();
    const token = await this.login(email, password);
    return token;
};

exports.login = async (email, password) => {
    const user = await checkExistingUsername(email).exec();

    if(!user || !await comparePassword(password, user.password)) {
        throw new Error ('Invalid email or password!');
    };

    const payload = {email: user.email, _id: user._id};
    const secret = 'Xen';
    const token = await jwt.sign(payload, secret, { expiresIn: '2h' });
    return token;
};

function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};