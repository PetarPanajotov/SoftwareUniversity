const db = require('../config/database.json');

exports.getHomePage = (req,res) => {
    res.render('index', { cubes: db.cubes })
}