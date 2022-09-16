// Write a function that takes two positive numbers as input and compute the greatest common divisor.

// The input comes as two positive integer numbers.

// The output should be printed on the console.
function greatestCommonDivisor(firstNum, secondNum) {
    for (let i = secondNum; i >= 0; i--) {
        let residueFirstNum = firstNum % i;
        let residueSecondNum = secondNum % i;
        if(residueFirstNum === 0 && residueSecondNum === 0) {
            console.log(i);
            break;
        }
    }
}
greatestCommonDivisor(2154, 458)