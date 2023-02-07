const mongoose = require('mongoose');


const accessorySchema = {
    name: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9]+/gm
    },
    description: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9]+/gm,
        minLength: 20
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//gm
    }
};

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;