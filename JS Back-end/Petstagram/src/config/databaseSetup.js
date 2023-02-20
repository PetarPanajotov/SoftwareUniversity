const mongoose = require('mongoose');

async function databaseInit() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/petstagram');
    console.log('Database connected');
};

module.exports = databaseInit;