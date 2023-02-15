const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name should be at least 2 character long!"]
    },
    imageUrl: {
        type: String,
        required: [true, 'URL address is required!'],
        match: [/^https?:\/\//gm, "Invalid URL address!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        minimum: [0, "Price should be positive number!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description should be at least 10 character long!"]
    },
    payment: {
        type: String,
        required: [true, "Payment is required!"],
        enum: ["crypto-wallet", "credit-card", "debit-card", "paypal"]
    },
    buy:
    [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    _ownerId: {
       type: mongoose.Types.ObjectId,
       ref: 'User' 
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;