// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and the secondary diagonals.

// The input comes as an array of arrays, containing number elements (2D matrix of numbers).

// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
function diagonalSum(matrix) {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
        sumSecondDiagonal += matrix[matrix.length - 1 - i][i];
    } 
    console.log(sumFirstDiagonal, sumSecondDiagonal);
}
diagonalSum([[3, 5, 17],
    [-1, 7, 14], [1, -8, 89]]);