function condenseArraytoNumber(arr) {
    let result = [];

    for (let el of arr) {
        result.push(el)
    }
    while (result.length > 1) {
        let temp = [];
        for (let i = 0; i < result.length - 1; i++) {
            temp[i] = result[i] + result[i+1];
        }
        result = temp;
    }
    console.log(result.join())
}
condenseArraytoNumber([5,0,4,1,2]);