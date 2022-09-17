// You are given an array of numbers. Write a JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. If there is an odd number of elements in the input, always take the bigger half. For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3.

// The input comes as an array of number elements.

// The output is the return value of the function and should be an array of number
function biggerHalf(arr) {
    let sortedArr = arr.sort((a,b) => a - b).slice(arr.length / 2, arr.length);
    return sortedArr;
}
biggerHalf([4, 7, 2, 5]);    