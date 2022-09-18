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