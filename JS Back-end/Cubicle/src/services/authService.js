const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwtUtils');
    
exports.checkExistingUsername = (username) => User.findOne({username});

exports.register = async (username, password) => {
    const hash = await bcrypt.hash(password, 10);
    let user = new User({username, password: hash});
    await user.save();
};
exports.login = async (username, password) => {
    const user = await this.checkExistingUsername(username).exec();
    if(!user || !await comparePassword(password, user.password)) {
        throw 'Invalid username or password!';
    };
    const payload = {username: user.username, _id: user._id};
    const secret = 'Xen';
    const token = await jwt.sign(payload, secret, { expiresIn: '2h' });
    return token;
};

async function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};