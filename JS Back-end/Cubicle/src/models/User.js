const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 18
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password have to be at least 6 characters!'],
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;