function arrayRotation (arr, rotations) {
    let newArr = [];
    let index = 0;
    let lengthArr = arr.length;
    for (el of arr) {
        newArr.push(el)
    }
    while (rotations !== 0) {
        if (index === lengthArr) {
            index = 0;
        }
        let num = Number(arr[index++])
        newArr.push(num)
        newArr.shift()
        rotations--
    }
    console.log(newArr.join(' '))
}
arrayRotation([2, 4, 15, 31],
    5)