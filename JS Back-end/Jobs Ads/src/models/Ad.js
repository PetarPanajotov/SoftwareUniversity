const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: [true, "Email is required!"],
        minLength: [4, "Headline should be a minimum of 4 characters long!"]
    },
    location: {
        type: String,
        required: true,
        minLength: [8, "Location should be a minimum of 8 characters long!"]
    },
    companyName: {
        type: String,
        required: true,
        minLength: [3, "Company name should be at least 3 characters!"]
    },
    companyDescription: {
        type: String,
        required: true,
        maxLength: [40, "Company description should be a maximum of 40 characters long!"]
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    applied: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;