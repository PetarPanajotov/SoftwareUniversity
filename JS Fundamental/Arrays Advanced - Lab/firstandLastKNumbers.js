function firstandLastKNumbers(arr) {
    let copyArr = []
    for (let el of arr) {
        copyArr.push(el)
    }
    let k = copyArr.shift();
    let firstArr = arr.slice(1, k+1);
    let secondArr = arr.slice(-k);
    console.log(firstArr.join(' '))
    console.log(secondArr.join(' '))
}
firstandLastKNumbers([3, 6, 7, 8, 9])