const { expect } = require('chai');
const { chooseYourCar } = require('../chooseCar')
describe("chooseYourCar …", function() {
    describe("Testing choosingType functionality", function() {
        it("Should throw error if year is less than 1900", function() {
            expect(() => {chooseYourCar.choosingType("Sedan", "Red", 1766)}).to.throw(`Invalid Year!`)
        });
        it("Should throw error if year is more than 2022", function() {
            expect(() => {chooseYourCar.choosingType("Sedan", "Red", 2023)}).to.throw(`Invalid Year!`)
        });
        it("Should not throw error if year is exactly 1900", function() {
            let result = chooseYourCar.choosingType("Sedan", "Red", 1900)
            expect(result).to.equal('This Sedan is too old for you, especially with that Red color.')
        });
        it("Should not throw error if year is exactly 2022", function() {
            let result = chooseYourCar.choosingType("Sedan", "Red", 2022)
            expect(result).to.equal('This Red Sedan meets the requirements, that you have.')
        });
        it("Should throw error if type is different from Sedan", function() {
            expect(() => {chooseYourCar.choosingType("Pesho", "Red", 2011)}).to.throw(`This type of car is not what you are looking for.`)
        });
        it("Should return correct message if the inputs are correct and year > 2010", function() {
            let result = chooseYourCar.choosingType("Sedan", "Red", 2011)
            expect(result).to.equal('This Red Sedan meets the requirements, that you have.')
        });
        it("Should return correct message if the inputs are correct and year is exactly 2010", function() {
            let result = chooseYourCar.choosingType("Sedan", "Red", 2010)
            expect(result).to.equal('This Red Sedan meets the requirements, that you have.')
        });
        it("Should return correct message if the inputs are correct and year < 2010", function() {
            let result = chooseYourCar.choosingType("Sedan", "Red", 2009)
            expect(result).to.equal('This Sedan is too old for you, especially with that Red color.')
        });
     });
     describe("brandName functionality", function() {
        it("Should throw error if brandName is not an Array", function() {
            expect(() => {chooseYourCar.brandName({Pesho: '16'}, 2)}).to.throw("Invalid Information!");
        });
        it("Should throw error if index is not a Number", function() {
            expect(() => {chooseYourCar.brandName(['BMW', 'Audi'], "1")}).to.throw("Invalid Information!");
        });
        it("Should throw error if index is integer", function() {
            expect(() => {chooseYourCar.brandName(['BMW', 'Audi'], 1.54)}).to.throw("Invalid Information!");
        });
        it("Should throw error if index is negative", function() {
            expect(() => {chooseYourCar.brandName(['BMW', 'Audi'], -1)}).to.throw("Invalid Information!");
        });
        it("Should throw error if index is higher than array length", function() {
            expect(() => {chooseYourCar.brandName(['BMW', 'Audi'], 4)}).to.throw("Invalid Information!");
        });
        it("Should throw error if index is equal array length", function() {
            expect(() => {chooseYourCar.brandName(['BMW', 'Audi'], 2)}).to.throw("Invalid Information!");
        });
        it("should return proper result with correct inputs", function() {
            let result = chooseYourCar.brandName(['BMW', 'Audi', 'Mercedes', 'Kia'], 1)
            expect(result).to.equal('BMW, Mercedes, Kia')
        });
    });
    describe("Testing CarFuelConsumption functionality", function() {
        it("Should throw error if distanceInKilometers argument is not correct type", function() {
            expect(() => {chooseYourCar.carFuelConsumption('22', 24)}).to.throw("Invalid Information!");
        });
        it("Should throw error if distanceInKilometers argument is an negative number", function() {
            expect(() => {chooseYourCar.carFuelConsumption(-23, 24)}).to.throw("Invalid Information!");
        });
        it("Should throw error if distanceInKilometers argument is exactly 0", function() {
            expect(() => {chooseYourCar.carFuelConsumption(0, 24)}).to.throw("Invalid Information!");
        });
        it("Should throw error if consumptedFuelInLiters argument is not correct type", function() {
            expect(() => {chooseYourCar.carFuelConsumption(12, "22")}).to.throw("Invalid Information!");
        });
        it("Should throw error if consumptedFuelInLiters argument is negative number", function() {
            expect(() => {chooseYourCar.carFuelConsumption(12, -2)}).to.throw("Invalid Information!");
        });
        it("Should throw error if consumptedFuelInLiters argument is exactly 0", function() {
            expect(() => {chooseYourCar.carFuelConsumption(12, 0)}).to.throw("Invalid Information!");
        });
        it("Should return correct result if passed arguments are correct and litersPerHundredKm <= 7", function() {
            let result = chooseYourCar.carFuelConsumption(4324, 44)
            expect(result).to.equal('The car is efficient enough, it burns 1.02 liters/100 km.')
        });
        it("Should return correct result if passed arguments are correct and litersPerHundredKm exactly 7", function() {
            let result = chooseYourCar.carFuelConsumption(100, 7)
            expect(result).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
        });
        it("Should return correct result if passed arguments are correct and litersPerHundredKm > 7", function() {
            let result = chooseYourCar.carFuelConsumption(100, 23)
            expect(result).to.equal('The car burns too much fuel - 23.00 liters!')
        });     
    });
});

