// Write a function that prints the two smallest elements from an array of numbers.

// The input comes as an array of number elements.

// The output is printed on the console on a single line, separated by space.
function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a,b) => a - b).slice(0,2);
    console.log(sortedArr.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
