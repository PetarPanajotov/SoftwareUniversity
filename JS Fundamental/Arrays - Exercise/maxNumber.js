function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        let boolean = true;
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = Number(arr[j]);
            if (num <= num2) {
                boolean = false;
            }
        }
        if (boolean) {
            newArr.push(num)
    }
    }
    console.log(newArr.join(' '))
}
maxNumber([41, 41, 34, 20])