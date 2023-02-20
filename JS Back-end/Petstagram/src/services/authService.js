const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('../utils/jwtUtils');

const checkExistingUsername = (username) => User.findOne({username});

exports.register = async (username, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error('Password missmatch. Please try again!');
    };
    if (password.length < 4) {
        throw new Error('Password should be at least 4 character long!');
    };
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new User({username, email, password: hashedpassword});
    await user.save();
    const token = await this.login(username, password)
    return token 
};

exports.login = async (username, password) => {
    const user = await checkExistingUsername(username).exec();

    if(!user || !await comparePassword(password, user.password)) {
        throw new Error ('Invalid email or password!');
    };
    const payload = { username: user.username, _id: user._id, email: user.email };
    const SECRET = 'Xen';
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });
    return token;
};

function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};