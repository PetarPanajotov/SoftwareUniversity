// Write a function that calculates and returns the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is the return value of your function and should be a number.
function sumFirstLast(arr) {
    arrToNumbers = arr.map(Number)
    let firstNum = arrToNumbers.shift();
    let secondNum = arrToNumbers.pop();
    return firstNum + secondNum;
}
sumFirstLast(['20', '30', '40']);