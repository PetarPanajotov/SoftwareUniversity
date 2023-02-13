const { urlencoded } = require('express');
const handlebarsConfig = require('./configs/viewEngine');
const databaseInit = require('./configs/databaseSetup');
const express = require('express');
const router = require('./routes');
const { authentication } = require('./middlewares/authMiddleware');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
app.use(cookieParser());

app.use(urlencoded({extended: false}));
app.use(express.static('src/public'));
handlebarsConfig(app);
app.use(authentication);
app.use(router);

databaseInit()
    .then(() => app.listen(port, console.log(`Server listening on port ${port}...`)))
    .catch((err) => console.error(err.message));
