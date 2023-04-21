// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.

// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.

// The output is a Boolean result indicating whether the matrix is magical or not.
function magicMatrices(matrix) {
    let arrRows = [];
    let arrColumns = [];
    let currentRowSum = 0;
    let lastRowSum = 0;
    let currentColumnSum = 0;
    let lastColumnSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        arrRows = matrix[i];
        arrRows.map(el => currentRowSum += el);
        arrColumns = matrix.map(el => currentColumnSum += el[i]);
        if (lastRowSum === 0 || lastColumnSum === 0) {
            lastRowSum = currentColumnSum;
            lastColumnSum = currentColumnSum;
        } // for the first interation, if there is no last row sum or last column sum.
        if (currentRowSum !== lastRowSum || currentColumnSum !== lastColumnSum) {
            return false;
        } else {
            lastRowSum = currentRowSum;
            lastColumnSum = currentColumnSum;
            currentRowSum = 0;
            currentColumnSum = 0;
        }
    }
    return true;
}
console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))


function magicMatricesv2(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumCurrentRow = matrix[i].reduce((acc, el) => acc + el);
        let sumNextRow = matrix[i + 1].reduce((acc, el) => acc + el);
        let sumCurrentColomn = [];
        let sumNextColomn = [];
        matrix.map(el => sumCurrentColomn.push(el[i]));
        matrix.map(el => sumNextColomn.push(el[i + 1]));
        sumCurrentColomn = sumCurrentColomn.reduce((acc, el) => acc + el);
        sumNextColomn = sumNextColomn.reduce((acc, el) => acc + el);
        if (sumCurrentRow !== sumNextRow || sumCurrentColomn !== sumNextColomn) {
            return false;
        }
    }
    return true;
}
console.log(magicMatricesv2([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]))