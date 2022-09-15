function sameNumbers(num) {
    let convert = num.toString();
    let boolean = true;
    let sum = 0;
    for(let i = 0; i < convert.length; i++) {
        let firstNum = Number(convert[0]);
        let nextNumToCheck = Number(convert[i]);
        if (firstNum !== nextNumToCheck) {
            boolean = false;
        }
        sum += nextNumToCheck;
    }
    console.log(`${boolean}\n${sum}`);
}
sameNumbers(1234);