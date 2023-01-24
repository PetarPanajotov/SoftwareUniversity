const Cube = require("../models/cube");

exports.getCreateCube = (req, res) => {
    res.render('create');
};
exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    cube.save()

    res.redirect('/')
}