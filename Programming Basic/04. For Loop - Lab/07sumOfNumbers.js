function sumOfNumbers (input) {
    let digits = input[0];
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        let digit = Number(digits[i]);
            sum = sum + digit
    }
    console.log (`The sum of the digits is:${sum}`)
}
sumOfNumbers (["14334"])