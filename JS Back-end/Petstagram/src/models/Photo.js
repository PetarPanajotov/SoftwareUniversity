const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name should be at least 2 characters."]
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\//gm, "Invalid image"]
    },
    age: {
        type: Number,
        required: [true, "Age is required!"],
        min: [1, "Age should be between 1 to 100!"],
        max: [100, "Age should be between 1 to 100!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [5, "Description should be at least 5 and no longer than 50 characters."],
        maxLength: [50, "Description should be at least 5 and no longer than 50 characters."]
    },
    location: {
        type: String,
        required: [true, "Location is required!"],
        minLength: [5, "Location should be at least 5 and no longer than 50 characters."],
        maxLength: [50, "Location should be at least 5 and no longer than 50 characters."]
    },
    commentList: [{
        userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
        },
        comment: {
            type: String
        }
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;