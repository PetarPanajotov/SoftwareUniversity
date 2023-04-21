const { expect } = require('chai')
const { isSymmetric } = require("../checkForSymmetry")
describe('checkSymmetry', () => {
    it('should return false if the input is not an array', () => {
        //Arange
        let object = {
            "Pesho": 24,
            "Gosho": 21,
            "Atanas": 32
        }
        //Act
        let result = isSymmetric(object);
        //Assert
        expect(result).to.be.equal(false);
    })
    it('should return true if input is an array and it IS symmetrical', () => {
        //Arange
        let array = [[1, 2, 3, 2, 1]]
        //Act
        let result = isSymmetric(array)

        //Assert
        expect(result).to.be.equal(true)
    })
    it('should return false if input is an array and it is NOT symmetrical ', () => {
        //Arange
        let array = [1, 2, 3, 4]

        //Act
        let result = isSymmetric(array)

        //Assert
        expect(result).to.be.equal(false)

    })
    it('should return true if input is an array with one element ', () => {
        //Arange
        let array = [1]

        //Act
        let result = isSymmetric(array)

        //Assert
        expect(result).to.be.equal(true)
    })
    it('should return false if the input is case sensitive', () => {
        //Arange
        let array = ["Gosho", "gosho"]

        //Act
        let result = isSymmetric(array)

        //Assert
        expect(result).to.be.equal(false)
    })
    it('should return false if the input is an array with mixed type(Numbers and strings)', () => {
        //Arange
        let array = [1,2,3,2,"1"]

        //Act
        let result = isSymmetric(array)

        //Assert
        expect(result).to.be.equal(false)
    })
})