const env = process.env.NODE_ENV || 'development';

const express = require('express');
const config = require('../config/config')[env]
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(config.port, console.log(`Server listening on port ${config.port}`));
