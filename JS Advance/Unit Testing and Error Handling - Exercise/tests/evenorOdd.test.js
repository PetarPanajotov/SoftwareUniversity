const {isOddOrEven} = require('../evenorOdd')
const { expect } = require('chai')

describe('isOddorEven', () => {
    it('should return undefined if the argument is number', () => {
        let input = 43;
        let result = isOddOrEven(input);
        expect(result).to.be.undefined;
    })
    it('should return undefined if the argument is object', () => {
        let input = {string: "23"};
        let result = isOddOrEven(input);
        expect(result).to.be.undefined;
    })
    it('should return even if the argument is correct', () => {
        let input = "Ivan";
        let result = isOddOrEven(input);
        expect(result).to.be.equal('even');
    })
    it('should return odd if the argument is correct', () => {
        let input = "Pesho";
        let result = isOddOrEven(input);
        expect(result).to.be.equal('odd');
    })
})