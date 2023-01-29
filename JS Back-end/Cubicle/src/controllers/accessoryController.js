const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');
const mongoose = require('mongoose');

exports.getCreateAccessory = (req, res) => {
    res.render('createAccessory');
};

exports.postCreateAcessory = async (req, res) => {
    const data  = req.body;
    let accessory = new Accessory(data);

    await accessory.save();

    res.redirect('/')
};
exports.getAttachAccessory = async (req, res) => {
    const cubeId = req.params.id;
    const cube = await Cube.findById(cubeId).lean();
    const accessories = await Accessory.find().lean();

    res.render('attachAccessory', {cube, accessories});
}