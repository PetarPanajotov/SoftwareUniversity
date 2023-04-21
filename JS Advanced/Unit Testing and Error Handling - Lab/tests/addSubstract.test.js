const { expect } = require('chai')
const { createCalculator } = require("../addSubstract")
describe('addSubstract', () => {
    let calc;
    beforeEach(function () {
        calc = createCalculator()
    })
    it('should return object', () => {
        //Arange
        let test = calc;
        //Act
        let result = typeof test;
        //Assert
        expect(result).to.equal("object");
    })
    it('should return function add()', () => {
        //Arange
        let test = calc.add;
        //Act
        let result = typeof test;
        //Assert
        expect(result).to.equal("function");
    })
    it('should return function subtract()', () => {
        //Arange
        let test = calc.subtract;
        //Act
        let result = typeof test;
        //Assert
        expect(result).to.equal("function");
    })
    it('should return function get()', () => {
        //Arange
        let test = calc.get;
        //Act
        let result = typeof test;
        //Assert
        expect(result).to.equal("function");
    })
    it('should return value 0 with argument of 0', () => {
        //Arange
        calc.get()
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.equal(0);
    })
    it('should return NaN if no argument is given', () => {
        //Arange
        calc.add();
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.be.NaN;
    })
    it('should function add() return number even if argument is from type "string"', () => {
        //Arange
        calc.add("5");
        //Act
        let result = typeof calc.get();
        //Assert
        expect(result).to.be.equal("number")
    })
    it('should function substract() return number even if argument is from type "string"', () => {
        //Arange
        calc.add("5");
        //Act
        let result = typeof calc.get();
        //Assert
        expect(result).to.be.equal("number");
    })
    it('should return NaN if argument is object',() => {
        //Arange
        calc.add({add: 2});
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.be.NaN;
    })
    it('should return NaN if argument is string with letters', () => {
        //Arange
        calc.subtract("Pesho")
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.be.NaN
    })
    it('should return correct result', () => {
        //Arange
        calc.add("5");
        calc.add(2);
        calc.subtract(2);
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(5);
    })
    it('should return correct result with argument of subtract(-2).', () => {
        //Arange
        calc.add("5");
        calc.add(2);
        calc.subtract(-2);
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(9);
    })
    it('should return correct result with arguments that are integers.', () => {
        //Arange
        calc.add(5.943);
        calc.add(2);
        calc.subtract(2);
        //Act
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(5.943);
    })
})