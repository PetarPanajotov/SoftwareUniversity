function specialNumbers (input) {
    let num = Number(input[0]);
    let string = "";
    for (let x1 = 1; x1 <= 9; x1++) { 
        for (let x2 = 1; x2 <= 9; x2++) {
            for (let x3 = 1; x3 <= 9; x3++) {
                for (let x4 = 1; x4 <= 9; x4++) {
                    if (num % x1 === 0 && num % x2 === 0 && num % x3 === 0 && num % x4 === 0) {
                        string += "" + x1 + x2 + x3 + x4 + " ";
                    }
                }
            }
        }
    }
    console.log(string);
}
specialNumbers (["3"])