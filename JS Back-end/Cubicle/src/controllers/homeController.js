const Cube = require('../models/Cube');

exports.getHomePage = async (req,res) => {
    const {search, from, to} = req.query;
    let cubes = await Cube.find().lean();
    if (search) {
        cubes = copyDb.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    };
    if (from) {
        cubes = copyDb.filter(x => Number(x.difficultyLevel) >= Number(from));
    };
    if (to) {
        cubes = copyDb.filter(x => Number(x.difficultyLevel) <= Number(to));
    };
    res.render('index', { cubes: cubes, search, from, to });
};
exports.getAboutPage = (req,res) => {
    res.render('about');
}
exports.getDetails = async (req,res) => {
    const cubeId = req.params.id;
    let cube = await Cube.findById(cubeId);
    if (!cube) {
        res.render('404');
        return;
    }
    res.render('details', cube);
}