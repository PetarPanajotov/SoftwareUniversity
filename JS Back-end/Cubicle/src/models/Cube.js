const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9\s]+/gm
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

    },
    _ownerId: {
        type: String
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
}
);

const Cube = mongoose.model('Cube', schema);

module.exports = Cube;
