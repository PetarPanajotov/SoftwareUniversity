// You are given two integers n and k. Write a JS function that generates and return the following sequence:

// · The first element is 1

// · Every following element equals the sum of the previous k elements

// · The length of the sequence is n elements

// The input comes as two number arguments. The first element represents the number n, and the second – the number k.

// The output is the return value of your function and should be an array of numbers.
function lastKNumberSequence(n, k) {
    let arrSequence = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let arrToSum = (arrSequence.length <= k) ?
        arrSequence.slice() :
        arrSequence.slice(arrSequence.length - k);
        for (let index of arrToSum) {
            sum += index;
        }
        arrSequence.push(sum);
    }
    return arrSequence;
}
lastKNumberSequence(6, 3);