function searchforaNumber(arr, conditions) {
    let counter = 0
    let copyArr = arr.slice();
    let numTaken = conditions.shift();
    let numToRemove = conditions.shift();
    let numtoSearch = conditions.shift();
    
    copyArr = copyArr.slice(numToRemove, numTaken)
    for(let i = 0; i <= copyArr.length; i++) {
        numChecker = copyArr[i];
        if  (numChecker === numtoSearch) {
            counter++
        }
    }
    console.log(`Number ${numtoSearch} occurs ${counter} times.`)
}
searchforaNumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])