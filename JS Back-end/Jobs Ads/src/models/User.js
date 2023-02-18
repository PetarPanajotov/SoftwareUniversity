const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required!"],
        minLength: [10, "Email should be at least 10 character long!"]
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    myAds: [{
        type: mongoose.Types.ObjectId,
        href: 'Ad'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;