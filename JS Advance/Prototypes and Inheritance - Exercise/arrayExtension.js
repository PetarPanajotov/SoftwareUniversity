(function () {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.skip = function (n) {
        return this.slice(n)
    }
    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }
    Array.prototype.sum = function () {
        return this.reduce((val, prev) => val + prev)
    }
    Array.prototype.average = function () {
        return this.sum() / this.length
    }
})()
let newArr = [1,2,3,5]
console.log(newArr.last())
console.log(newArr.skip(1))
console.log(newArr.take(3))
console.log(newArr.sum())
console.log(newArr.avarage())