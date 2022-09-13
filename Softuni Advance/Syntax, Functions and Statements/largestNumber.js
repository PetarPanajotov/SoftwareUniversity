function largestNumber(firstNum, secondNum, thirdNum) {
    let result;
    if (firstNum > secondNum && firstNum > thirdNum) {
        result = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        result = secondNum;
    } else {
        result = thirdNum;
    }
    console.log(`The largest number is ${result}.`)
}
largestNumber(-3, -5, -22.5)