function equalSumsEvenOddPosition (input) {
    let index = 0;
    let num1 = Number(input[index]);
    index++;
    let num2 = Number(input[index]);
    index++;
    let odd = 0;
    let even = 0;
    let print = '';
    for (let i = num1; i <= num2; i++) {
        let currentNum = "" + i;
        odd = 0;
        even = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        if (odd === even) {
            print += `${i} `
        }
        
    }
    console.log(print)
}
equalSumsEvenOddPosition (["100000",
"100050"])
