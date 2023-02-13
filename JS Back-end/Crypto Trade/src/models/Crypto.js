const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    buy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    _ownerId: {
       type: mongoose.Types.ObjectId,
       ref: 'User' 
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;