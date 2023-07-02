function sumEvenNumbers(arr) {
    let temp = 0;
    for (i = 0; i < arr.length; i++) {
        let index = Number(arr[i]);
        if (index % 2 !== 0) {
            index = 0
        }  
        temp += index;
    }
    console.log(temp)
}
sumEvenNumbers(['1','2','3','4','5','6']);