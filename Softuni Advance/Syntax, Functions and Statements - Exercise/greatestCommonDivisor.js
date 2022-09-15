function greatestCommonDivisor(firstNum, secondNum) {
    for (let i = secondNum; i >= 0; i--) {
        let residueFirstNum = firstNum % i;
        let residueSecondNum = secondNum % i;
        if(residueFirstNum === 0 && residueSecondNum === 0) {
            console.log(i);
            break;
        }
    }
}
greatestCommonDivisor(2154, 458)