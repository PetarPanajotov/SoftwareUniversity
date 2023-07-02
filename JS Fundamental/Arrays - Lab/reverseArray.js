function reverseArray(n, arr) {
    let newArr = [];
    let output = ""
    for(let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    for(let j = newArr.length - 1; j >= 0; j--) {
    output += `${newArr[j]} `
    }
    console.log(output)
}
reverseArray(4, [-1, 20, 99, 5])