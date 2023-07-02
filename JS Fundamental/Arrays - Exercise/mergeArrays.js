function mergeArrays(firstArr, secondArr) {
    let newArr = [];
    for(let i = 0; i < firstArr.length; i++) {
        let firstElement = firstArr[i];
        let secondElement = secondArr[i];
            if (i % 2 === 0) {
                firstElement = Number(firstElement)
                secondElement = Number(secondElement)
                let sum = firstElement + secondElement;
                newArr.push(sum)
            } else {
                let sum = firstElement + secondElement
                newArr.push(sum)
            }
    }
    console.log (newArr.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])