function sorting(arr) {
    smallestNums = [];
    let biggerNums = arr.sort((a, b) => a - b);
    for (let i = 0; i < biggerNums.length; i+=2) {
        let moveNum = biggerNums.pop();
        biggerNums.splice(i, 0, moveNum);
    }
    console.log(biggerNums.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32,

    7, 19] )