const Cube = require("../models/Cube");
const { generateDifficultyLevel } = require('../utils/difficultyLevelUtil')

exports.getCreateCube = (req, res) => {
    res.render('create');
};
exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube({name, description, imageUrl, difficultyLevel});
    await cube.save();

    res.redirect('/');
}
exports.getEdit = async (req, res) => {
    const cubeId = req.params.id;
    const cube = await Cube.findById(cubeId).lean();
    const difficultyLevel = generateDifficultyLevel(cube.difficultyLevel);

    res.render('edit', { cube, difficultyLevel });
}
exports.postEdit = async (req, res) => {
    const cubeId = req.params.id;
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await Cube.findOneAndUpdate({_id: cubeId}, {name, description, imageUrl, difficultyLevel});
    res.redirect(`/details/${cubeId}`)
}

exports.getDelete = async(req, res) => {
    const cubeId = req.params.id;
    const cube = await Cube.findById(cubeId).lean();
    const difficultyLevel = generateDifficultyLevel(cube.difficultyLevel);

    res.render('delete', { cube, difficultyLevel });
}

exports.postDelete = async (req, res) => {
    const cubeId = req.params.id;

    await Cube.findOneAndRemove({_id: cubeId});
    res.redirect(`/`)
}