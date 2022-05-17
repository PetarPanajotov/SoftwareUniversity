function sumOfTwoNumbers (input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    let flag = true

    combinationCounter = 0
    let sum = 0;

    for (let i = n1; i <= n2; i++) {
        for (let j = n1; j <= n2; j++) {
            sum = i + j;
            combinationCounter++
            if (sum === n3) {
                flag = false
                sum = i + j;
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${sum})`)
                break;
            }
        }
        if (sum === n3) {
            break;
        }
    }
    if (flag){
    console.log (`${combinationCounter} combinations - neither equals ${n3}`)
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])





