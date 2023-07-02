function factorialDivision (num1, num2) {
    let resultNum1 = 1;
    let resultNum2 = 1;
    for (let i = num1; i >= 1; i--) {
        resultNum1 *= i
    }
    for (let j = num2; j >= 1; j--) {
        resultNum2 *= j
    }
    let result = resultNum1 / resultNum2
    console.log(result.toFixed(2))
}
factorialDivision(6, 3);