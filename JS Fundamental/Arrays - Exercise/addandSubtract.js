function addandSubtract (arr) {
    let sumArr = 0
    let modifyArr = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        sumArr += num;
        if (num % 2 === 0) {
            modifyNum = num + i;
        } else {
            modifyNum = num - i
        }
        modifyArr += modifyNum;
        newArr.push(modifyNum);
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(modifyArr)
}
addandSubtract([-5, 11, 3, 0, 2]);