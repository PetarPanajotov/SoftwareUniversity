const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const express = require('express');
const databaseInit = require('./config/databaseSetup');
const viewEngineSetup = require('./config/viewEngine');
const router = require('./routes');
const app = express();
const port = 3000;

viewEngineSetup(app);
app.use(cookieParser())
app.use(urlencoded({ extended: false }));
app.use(express.static('src/public'));
app.use(router);

databaseInit()
    .then(() => app.listen(port, console.log(`Server is listening on ${port}...`)))
    .catch((err) => console.error(err.message));
