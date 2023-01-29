const Accessory = require('../models/Accessory');
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