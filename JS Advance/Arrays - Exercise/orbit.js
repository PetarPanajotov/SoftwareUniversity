function orbit(arr) {
    let matrix = [];
    let scale;
    let counter = 2;
    let [width, height, x, y] = arr;
    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }
    for (let index of matrix) {
        index[width-1] = '';
    }
    matrix[y][x] = 1;
    for (let i = x; i > 0; i--) {
        matrix[y][i-1] = counter;
        counter++;
    } // left side;
    counter = 2;
    for (let i = x; i <= width-x; i++) {
        matrix[y][i+1] = counter;
        counter++
    } // right side;
    counter = 2;
    for (let i = y+1; i < matrix.length; i++) {
        matrix[i][x] = counter;
        counter++;
    } // down side;
    counter = 2;
    for (let i = y - 1; i >= 0; i--) {
        matrix[i][x] = counter;
        counter++;
    }//upper side;
    for (let i = y-)
    console.table(matrix)
}
orbit([4, 4, 2, 1])