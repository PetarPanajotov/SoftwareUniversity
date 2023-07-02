function processOddNumbers(arr) {
    let arrFilter = arr.filter((el, i) => i % 2 === 1)
    let multiplied = arrFilter.map(k => k * 2)
                        .reverse()
    console.log(multiplied.join(' '))
}
processOddNumbers([3,
    0,
    10,
    4,
    7,
    3])