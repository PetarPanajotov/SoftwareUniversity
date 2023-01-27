const express = require('express');
const config = require('./config/config');
const setupView = require('./config/viewEngine');
const routes = require('./routes');
const databaseInit = require('./config/databaseConfig')

const app = express();
setupView(app)

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }))
app.use(routes);
databaseInit()
    .then(() => app.listen(config.port, console.log(`Server listening on port ${config.port}`)))
    .catch((err) => console.error(err.message));
