const { expect } = require('chai')
const { rgbToHexColor } = require("../RGBtoHEX")
describe('rgbToHexColor', () => {
    it('should return correct result with inputs in range 255<=input=>0', () => {
        //Arange
        let red = 19;
        let green = 21;
        let blue = 22;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal("#131516");
    })
    it('should return underfined if one of the inputs is not integer', () => {
        //Arange
        let red = "19";
        let green = 21;
        let blue = 22;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal(undefined);
    })
    it('should return underfined if first input is out of range', () => {
        //Arange
        let red = 258;
        let green = 254;
        let blue = 22;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal(undefined);
    })
    it('should return underfined if second input is out of range', () => {
        //Arange
        let red = 232;
        let green = 257;
        let blue = 22;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal(undefined);
    })
    it('should return underfined if third input is out of range', () => {
        //Arange
        let red = 232;
        let green = 233;
        let blue = 267;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal(undefined);
    })
    it('should return correct result if one of input is equal to 255', () => {
        //Arange
        let red = 245;
        let green = 254;
        let blue = 255;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal("#F5FEFF");
    })
    it('should return correct result if all input are equal to 255', () => {
        //Arange
        let red = 255;
        let green = 255;
        let blue = 255;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal("#FFFFFF");
    })
    it('should return correct result if all input are equal to 0', () => {
        //Arange
        let red = 0;
        let green = 0;
        let blue = 0;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal("#000000");
    })
    it('should return correct result if one of input is equal to 0', () => {
        //Arange
        let red = 0;
        let green = 254;
        let blue = 255;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal("#00FEFF");
    })
    it('should return undefined if one the input is negative', () => {
        //Arange
        let red = -4
        let green = 254;
        let blue = 255;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal(undefined);
    })   
    it('should return undefined two of the inputs are invalid', () => {
        //Arange
        let red = 3
        let green = 5;
        let blue = 253;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(typeof result).to.be.equal("string");
    })
    it('should return undefined if one of the numbers is not a integer', () => {
        //Arange
        let red = 3.6;
        let green = 5;
        let blue = 253;
        //Act
        let result = rgbToHexColor(red, green, blue);
        //Assert
        expect(result).to.be.equal(undefined);
    })
    it('should return undefined there are no inputs', () => {
        //Arange
        //Act
        let result = rgbToHexColor();
        //Assert
        expect(result).to.be.equal(undefined);
    })
})
