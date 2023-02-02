const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtCallback = require('jsonwebtoken');
const util = require('util');

const jwt = {
    sign: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify)
} 
    
exports.checkExistingUsername = (username) => User.findOne({username});

exports.register = async (username, password) => {
    const hash = await bcrypt.hash(password, 10);
    let user = new User({username, password: hash});
    await user.save();
};
exports.login = async (username, password) => {
    const user = await this.checkExistingUsername(username).exec();
    console.log(user.password);
    if(!user || !await comparePassword(password, user.password)) {
        throw 'Invalid username or password!'
    };
    const payload = {username: user.username};
    const secret = 'Xen';
    const token = await jwt.sign(payload, secret, { expiresIn: '2h' });
    return token;
};

async function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};