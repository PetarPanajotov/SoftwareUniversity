function sumFirstandLast (arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    let sum = firstNum + lastNum;
    console.log(sum)
}
sumFirstandLast(['20', '30', '40'])