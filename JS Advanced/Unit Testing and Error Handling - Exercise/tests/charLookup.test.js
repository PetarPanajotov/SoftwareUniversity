const { lookupChar } = require('../charLookup')
const { expect } = require('chai')
describe('lookupChar', () => {
    it('should return undefined if the first argument is number', () => {
        let string = 43;
        let index = 27;
        let result = lookupChar(string, index);
        expect(result).to.be.undefined;
    })
    it('should return undefined if the second argument is string', () => {
        let string = "Pesho";
        let index = "2";
        let result = lookupChar(string, index);
        expect(result).to.be.undefined;
    })
    it('should return undefined if the second argument is integer', () => {
        let string = "Pesho";
        let index = 0.545;
        let result = lookupChar(string, index);
        expect(result).to.be.undefined;
    })
    it('should return "Incorrect index" if the second argument negative number', () => {
        let string = "Pesho";
        let index = -2;
        let result = lookupChar(string, index);
        expect(result).to.be.equal('Incorrect index')
    })
    it('should return "incorrect index" if second argument(index) is higher than the first argument(string) length', () => {
        let string = "Pesho";
        let index = 7;
        let result = lookupChar(string, index);
        expect(result).to.be.equal('Incorrect index')
    })
    it('should return correct result if both arguments are valid', () => {
        let string = "Pesho";
        let index = 2;
        let result = lookupChar(string, index);
        expect(result).to.be.equal('s')
    })
})