function numbersEndingIn7 () {
    let number = 1000;
    for (let i = 1; i <= number; i++) {
        if (i % 10 === 7) {
            console.log (i)
        }
    }
}
numbersEndingIn7 ()