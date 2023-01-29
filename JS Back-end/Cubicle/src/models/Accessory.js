const mongoose = require('mongoose');


const accessorySchema = {
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//gm
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    }
};

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;