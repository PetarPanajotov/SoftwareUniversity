const mongoose = require('mongoose');
const config  = require('./config');

async function databaseInit() {
  mongoose.set('strictQuery', false)
  await mongoose.connect(config.DB_URI);
  console.log('Database connected')
}
module.exports = databaseInit;