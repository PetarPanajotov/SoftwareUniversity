const Cube = require("../models/Cube");
const mongoose = require('mongoose');

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
    res.render('edit', cube);



}
exports.getDelete = (req, res) => {
    res.render('delete');
}