function stringLength(firstArg, secondArg, thirdArg) {
    let sumLength = firstArg.length + secondArg.length + thirdArg.length;
    let averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake')