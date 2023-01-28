const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//gm
    },
    difficultyLevel: {
        type: String,
        required: true,

    }
}
);

const Cube = mongoose.model('Cube', schema);

module.exports = Cube;
