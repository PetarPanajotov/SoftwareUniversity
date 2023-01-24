const db = require('../config/database.json');

exports.getHomePage = (req,res) => {
    res.render('index', { cubes: db.cubes })
}
exports.getAboutPage = (req,res) => {
    res.render('about')
}
exports.getDetails = (req,res) => {
    const cubeId = Number(req.params.id)
    let cube = db.cubes.find(x => x.id === cubeId);
    res.render('details', {cube})
}