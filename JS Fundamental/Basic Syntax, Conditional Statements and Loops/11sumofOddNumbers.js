function sumofOddNumbers (n) {
    let counter = 0
    let i = 0
    let sum = 0
    while (counter !== n) {
        i++
        if (i % 2 === 1) {
            console.log(i);
            counter++;
            sum += i;
        }
    }
    console.log (`Sum: ${sum}`)
}
sumofOddNumbers(5)