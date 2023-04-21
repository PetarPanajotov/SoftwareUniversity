// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.

// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.

// The input comes as an integer number.

// The output should be printed on the console.
function sameNumbers(num) {
    let convert = num.toString();
    let boolean = true;
    let sum = 0;
    for(let i = 0; i < convert.length; i++) {
        let firstNum = Number(convert[0]);
        let nextNumToCheck = Number(convert[i]);
        if (firstNum !== nextNumToCheck) {
            boolean = false;
        }
        sum += nextNumToCheck;
    }
    console.log(`${boolean}\n${sum}`);
}
sameNumbers(1234);