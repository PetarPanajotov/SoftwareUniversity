const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9]+/gm, 'Password must contain only alphabetic letters and numbers!'],
        minLength: [5, 'Username must to be at least 5 characters!'],
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;