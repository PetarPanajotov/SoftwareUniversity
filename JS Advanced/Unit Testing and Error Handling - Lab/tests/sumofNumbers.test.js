const { expect } = require('chai')
const {sum} = require("../sumofNumbers")
describe('sum', () => {
    it('should return correct result with array of numbers', () => {
        //Arange
        let array = [1,2,3];

        //Act
        let result = sum(array);

        //Assert

        expect(result).to.be.equal(6);
    })
    it('should return correct result with array of numbers and negative numbers', () => {
        //Arange
        let array = [1,2,3,-4]

        //Act
        let result = sum(array)

        //Assert
        expect(result).to.be.equal(2)
    })
    it('should return correct result with array of one number', () => {
        //Arange
        let array = [1]

        //Act
        let result = sum(array)

        //Assert
        expect(result).to.be.equal(1)
    })
    
})