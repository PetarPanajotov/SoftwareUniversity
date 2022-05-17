function numbersDivisibleby9 (input) {
    let n = Number(input[0]);
    let m = Number(input[1])
    let sum = 0;
    let output = "";
    for (let i = n; i < m; i++) {

        if (i % 9 === 0) {
            sum += i;
            output += i +"\n"
        }
    }
    console.log (`The sum: ${sum}`)
    console.log (output)
}
numbersDivisibleby9 (["100", "200"])