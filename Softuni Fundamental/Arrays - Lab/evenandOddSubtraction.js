function evenandOddSubtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    for (i = 0; i < arr.length; i++) {
        let index = Number(arr[i]);
        if (index % 2 === 0) {
            sumEven += index;
        } else {
            sumOdd += index;
        }
    }
    let diff = sumEven - sumOdd;
    console.log (diff);
}
evenandOddSubtraction([3,5,7,9]);