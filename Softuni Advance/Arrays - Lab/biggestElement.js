// Write a function that finds the biggest element inside a matrix.

// The input comes as an array of arrays, containing number elements (2D matrix of numbers).

// The output is the return value of your function. Find the biggest element and return it.
function biggestElement(matrix) {
    let biggestNumbersArr = []
    matrix.forEach((element) => element.sort((a, b) => a - b));
    for (let index of matrix) {
        let lastNum = index.pop();
        biggestNumbersArr.push(lastNum);
    }
    biggestNumbersArr.sort((a,b) => b - a)
    return biggestNumbersArr.shift()
}
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])