function triplesofLatinLetters(n) {
    let letter = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                letter =  String.fromCharCode(97+i) + String.fromCharCode(97+j) + String.fromCharCode(97+k)
                console.log (letter)
            }
        }
    }
}
triplesofLatinLetters('3')