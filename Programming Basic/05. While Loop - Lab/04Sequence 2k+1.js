function sequence (input) {
    let index = 0;

    let num = Number(input[index]);
    index++;

    let sum = 1;
    while (sum <= num) {
    console.log (sum)
    sum = 2 * sum + 1;
    }
}
sequence (["31"])
