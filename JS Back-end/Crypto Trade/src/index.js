const { urlencoded } = require('express');
const handlebarsConfig = require('./configs/viewEngine');
const express = require('express');
const router = require('./routes');
const app = express();
const port = 3000;

app.use(urlencoded({extended: false}));
handlebarsConfig(app);
app.use(router);


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})