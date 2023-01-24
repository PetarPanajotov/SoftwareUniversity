const env = process.env.NODE_ENV || 'development';

const express = require('express');
const config = require('./config/config')[env];
const setupView = require('./config/viewEngine');
const routes = require('./routes');

const app = express();
setupView(app)

app.use(express.static('src/public'));
app.use(routes);

app.listen(config.port, console.log(`Server listening on port ${config.port}`));
