function processOddPosition (arr) {
    let filterArr = arr.filter((el, index) => index % 2 !== 0)
        .map((a) => a*2)
        .reverse();
    return filterArr;
}
processOddPosition([10, 15, 20, 25]);