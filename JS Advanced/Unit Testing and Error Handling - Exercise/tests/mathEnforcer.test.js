const { mathEnforcer } = require('../mathEnforcer')
const { expect } = require('chai')

describe('Test mathEnforcer functionality', () => {
    describe('addFive', () => {
        it('should return undefined if the argument is string', () => {
            let input = "Ivan";
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.undefined;
        })
        it('should return undefined if the argument is number but formatted to string', () => {
            let input = "32";
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.undefined;
        })
        it('should return correct result if input is valid', () => {
            let input = 5;
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(10)
        })
        it('should return correct result if input is negative number', () => {
            let input = -7;
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(-2)
        })
        it('should return correct result if input integer number', () => {
            let input = -5.5;
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(-0.5)
        })
    })
    describe('subtractTen', () => {
        it('should return undefined if the argument is string', () => {
            let input = "Pesho";
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.undefined;
        })
        it('should return undefined if the argument is number but formatted to string', () => {
            let input = "11";
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.undefined;
        })
        it('should return correct result if input is valid', () => {
            let input = 11;
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(1)
        })
        it('should return correct result if input is negative number', () => {
            let input = -7;
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(-17)
        })
        it('should return correct result if input integer number', () => {
            let input = 12.5;
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(2.5)
        })
    })
    describe('sum', () => {
        it('should return undefined if the  the first argument is string', () => {
            let num1 = "23"
            let num2 = 23;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.undefined;
        })
        it('should return undefined if the  the second argument is string', () => {
            let num1 = 21;
            let num2 = "1"
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.undefined;
        })
        it('should return correct result if both arguments are numbers', () => {
            let num1 = 21;
            let num2 = 1;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.equal(22)
        })
        it('should return correct result if one of the argument is negative number and other is positive', () => {
            let num1 = 21;
            let num2 = -6;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.equal(15)
        })
        it('should return correct result if both arguments are 0', () => {
            let num1 = 0;
            let num2 = 0;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.equal(0)
        })
        it('should return correct result if one of the argument is integer', () => {
            let num1 = 0.54;
            let num2 = 2;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.equal(2.54)
        })
        it('should return correct result both arguments are integers', () => {
            let num1 = 0.54;
            let num2 = 6.54434354343;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.equal(7.08434354343)
        })
        it('should return infinity if one of the argument is infinity', () => {
            let num1 = Infinity;
            let num2 = 6.54434354343;
            let result = mathEnforcer.sum(num1,num2);
            expect(result).to.be.equal(Infinity)
        })
    })
})