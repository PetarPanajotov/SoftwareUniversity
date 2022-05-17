function sumNumbers (input) {
    let index = 0;
    let sum = Number(input[index])
    index++;

    let num = 0;
    let sum2 = 0;

    while (true) {
        num = Number(input[index]);
        if (sum2 >= sum) {    
            break;
        } else {
            sum2 += num;
        }
        index++
    }
    console.log(sum2)
}
sumNumbers (["20",
"1",
"2",
"3",
"4",
"5",
"4"])


