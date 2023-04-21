// Write a JS function that reads a given matrix of numbers and checks if both main diagonals have equal sums. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.

// The input comes as an array of strings. Each element represents a string of numbers, with spaces between them. Parse it into a matrix of numbers, so you can work with it.

// The output is either the new matrix, with all cells not belonging to a main diagonal are changed to the diagonal sum, or the original matrix if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below.
function diagonalAttack(matrix) {
    let numArr = [];
    let resultArr = [];
    let firstDiagonal = [];
    let secondDiagonal = [];
    matrix.forEach(element => {
        let i = element.split(' ').map(Number);
        return numArr.push(i);
    });
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += numArr[i][i];
        sumSecondDiagonal += numArr[i][numArr[i].length - 1 - i];
        firstDiagonal.push(numArr[i][i]);
        secondDiagonal.push(numArr[i][matrix.length - 1 - i]);
    }
    if (sumFirstDiagonal === sumSecondDiagonal) {
        for (let index of numArr) {
            index = index.map(a => a = sumFirstDiagonal);
            resultArr.push(index);
        }
        for (let i = 0; i < matrix.length; i++) {
            resultArr[i][i] = firstDiagonal[i];
            resultArr[i][matrix.length - 1 - i] = secondDiagonal[i];
        }
    } else {
        resultArr = numArr;
    }
    for (let index of resultArr) {
        console.log(index.join(' '));
    }
}
diagonalAttack(
    ['1 1 1', '1 1 1', '1 1 0']);