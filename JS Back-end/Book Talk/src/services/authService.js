const bcrypt = require('bcrypt');
const User = require('../models/User');

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