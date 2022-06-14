function magicSum(arr, num) {
    let firstNumber;
    let secondNumber;
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        let tempArr = [];
        firstNumber = Number(arr[i]);
        for (let j = i+1; j < arr.length; j++) {
            secondNumber = Number(arr[j]);
            sum = firstNumber + secondNumber;
            if (sum === num) {
                tempArr.push(firstNumber);
                tempArr.push(secondNumber)
                console.log (tempArr.join(' '));
            }
            tempArr = [];
            sum = 0;
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],

    27)