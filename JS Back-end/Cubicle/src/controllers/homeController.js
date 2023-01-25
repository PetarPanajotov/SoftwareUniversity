const db = require('../config/database.json');

exports.getHomePage = (req,res) => {
    const {search, from, to} = req.query;
    let copyDb = db.cubes;
    if (search) {
        copyDb = copyDb.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        copyDb = copyDb.filter(x => Number(x.difficultyLevel) >= Number(from));
    }
    if (to) {
        copyDb = copyDb.filter(x => Number(x.difficultyLevel) <= Number(to));
    }
    res.render('index', { cubes: copyDb, search, from, to })
}
exports.getAboutPage = (req,res) => {
    res.render('about')
}
exports.getDetails = (req,res) => {
    const cubeId = Number(req.params.id)
    let cube = db.cubes.find(x => x.id === cubeId);
    if (!cube) {
        res.render('404');
        return;
    }
    res.render('details', {cube})
}