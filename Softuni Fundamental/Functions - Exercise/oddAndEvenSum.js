function oddAndEvenSum(num) {
    num = String(num);
    let sumOdd = 0;
    let sumEven = 0;
    for(let i = 0; i < num.length; i++) {
        let numIndex = Number(num.charAt(i));
        if (numIndex % 2 === 1) {
            sumOdd += numIndex;
        } else {
            sumEven += numIndex;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435)