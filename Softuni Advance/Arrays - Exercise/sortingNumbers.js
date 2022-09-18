// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

// Return the resulting array
function sortingNumbers(arr) {
    let result = [];
    let arrLength = arr.length;
    let sortedArr = arr.sort((a,b) => a - b);
    for (let i = 0; i < arrLength/2; i++) {
        let current = sortedArr.shift();
        let end = sortedArr.pop();
        result.push(current);
        result.push(end);
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);