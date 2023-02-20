const { engine } = require('express-handlebars');

function viewEngineSetup(app) {
    app.engine('.hbs', engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set('views', './src/views');
}

module.exports = viewEngineSetup;