const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required!"],
        match: [/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/, "Invalid email. Please try again!"]
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: [40, 'Description of skills should be a maximum of 40 characters long!']
    },
    myAds: [{
        type: mongoose.Types.ObjectId,
        href: 'Ad'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;