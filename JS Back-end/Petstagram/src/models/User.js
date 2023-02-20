const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        minLength: [2, "Username should be at least 2 character long!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        minLength: [10, "Email should be at least 10 character long!"]
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;