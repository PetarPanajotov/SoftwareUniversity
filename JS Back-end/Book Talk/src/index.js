const express = require('express');
const viewEngineSetup = require('./config/viewEngine');
const router = require('./routes');
const app = express();
const port = 3000;

viewEngineSetup(app);
app.use(express.static('src/public'));
app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})