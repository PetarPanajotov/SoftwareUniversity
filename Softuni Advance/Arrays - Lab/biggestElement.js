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