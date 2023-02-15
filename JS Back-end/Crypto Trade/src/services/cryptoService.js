const Crypto = require('../models/Crypto');
const { generatePaymentOptions } = require('../utils/paymentOptions');

exports.deleteCrypto = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);
exports.editCrypto = async(cryptoId) => {
    const crypto = await Crypto.findById(cryptoId).lean();
    const generatePayment = generatePaymentOptions(crypto.payment);
    return {crypto, generatePayment};
}
exports.editCryptoData = async(data, cryptoId) => {
    await Crypto.findByIdAndUpdate(cryptoId, data);
};