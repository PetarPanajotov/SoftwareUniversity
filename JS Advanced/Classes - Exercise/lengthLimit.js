class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    decrease(num) {
        if ((this.innerLength - num) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = this.innerLength - num;
        }
        return this.innerLength
    }
    increase(num) {
        return this.innerLength += num
    }


    toString() {
        if(this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, 0+this.innerLength ) +'...'
        } else {
            return this.innerString
        }
    }
}
let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test