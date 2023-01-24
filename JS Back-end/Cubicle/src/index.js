const env = process.env.NODE_ENV || 'development';

const express = require('express');
const config = require('./config/config')[env];
const setupView = require('./config/viewEngine');

const app = express();
setupView(app)

app.use(express.static('src/public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/deails', (req, res) => {
    res.render('details');
});
app.get('/create', (req, res) => {
    res.render('create');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(config.port, console.log(`Server listening on port ${config.port}`));
