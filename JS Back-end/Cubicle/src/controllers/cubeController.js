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