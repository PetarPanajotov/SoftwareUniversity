const jwtCallback = require('jsonwebtoken');
const util = require('util');

module.exports = {
    sign: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify)
};