const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9]+/gm,
        minLength: 5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9]+/gm,
        minLength: [8, 'Password must to be at least 6 characters!'],
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;