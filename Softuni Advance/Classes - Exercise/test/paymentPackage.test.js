let { PaymentPackage } = require('../paymentPackage');
let { expect } = require('chai');
describe("PaymentPackage", function () {
    describe('test setters', function () {
        let currenttest;
        beforeEach(() => {
            currenttest = new PaymentPackage('Pesho', 5)
        });

        it("should return the name with correct input", function () {
            expect(currenttest._name).to.equal('Pesho')
        });
        it("should return the proper type of name", function () {
            expect(typeof (currenttest._name)).to.equal('string')
        });
        it("should return the value with correct input", function () {
            expect(currenttest._value).to.equal(5)
        });
        it("should return the proper type of value", function () {
            expect(typeof (currenttest._value)).to.equal('number')
        });
        it("should return the initial value of VAT", function () {
            expect(currenttest._VAT).to.equal(20)
        });
        it("should return the proper type of default VAT", function () {
            expect(typeof (currenttest._VAT)).to.equal('number')
        });
        it("should return the initial value of active", function () {
            expect(currenttest._active).to.equal(true)
        });
        it("should return the proper type of default active", function () {
            expect(typeof (currenttest._active)).to.equal('boolean')
        });
    })
    describe('test getters', function () {
        let currenttest;
        beforeEach(() => {
            currenttest = new PaymentPackage('Pesho', 5)
        });

        it("should return the name with correct input", function () {
            expect(currenttest.name = "Ivan").to.equal('Ivan')
        })
        it("should throw error if the name is not from proper type", function () {
            expect(() => {currenttest.name = 11}).to.throw('Name must be a non-empty string')
        })
        it("should throw error if the name is empty string", function () {
            expect(() => {currenttest.name = ""}).to.throw('Name must be a non-empty string')
        })
        it("should return the value with correct input", function () {
            expect(currenttest.value = 11).to.equal(11)
        })
        it("should throw error if the value is negative number", function () {
            expect(() => {currenttest.value = -11}).to.throw('Value must be a non-negative number')
        })
        it("should return correct value if it's 0", function () {
            expect(currenttest.value = 0).to.equal(0)
        })
        it("should return correct VAT if its number and > 0", function () {
            expect(currenttest.VAT = 2).to.equal(2)
        })
        it("should return correct VAT if its number and it's 0", function () {
            expect(currenttest.VAT = 0).to.equal(0)
        })
        it("should throw error if the VAT is not proper type", function () {
            expect(() => {currenttest.VAT = "5"}).to.throw('VAT must be a non-negative number')
        })
        it("should throw error if the VAT is negative number", function () {
            expect(() => {currenttest.VAT = -7}).to.throw('VAT must be a non-negative number')
        })
        it("should return correct 'active' if type is boolean and set to active", function () {
            expect(currenttest.active = true).to.equal(true)
        })
        it("should return correct 'active' if type is boolean and set to false", function () {
            expect(currenttest.active = false).to.equal(false)
        })
        it("should throw error if the 'active' is not proper type", function () {
            expect(() => {currenttest.active = "5"}).to.throw('Active status must be a boolean')
        })
    })
    describe('test toString function', function () {
        let currenttest;
        beforeEach(() => {
            currenttest = new PaymentPackage('Pesho', 5)
        });

        it("toString should return correct result", function () {
            expect(currenttest.toString()).to.equal(`Package: Pesho\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6`)
        })
        it("toString should be proper type", function () {
            expect(typeof(currenttest.toString())).to.equal(`string`)
        })
        it("toString should return correct result", function () {
            currenttest.active = false
            expect(currenttest.toString()).to.equal(`Package: Pesho (inactive)\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6`)
        })
    })
})
