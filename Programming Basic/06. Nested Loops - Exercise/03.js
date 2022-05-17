function sumPrimeNonPrime (input) {
    let index = 0;

    let command = input[index];
    index++;

    let sumPrime = 0;
    let SumNonPrime = 0;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log ("Number is negative.")
            command = input[index];
            index++;
            continue
        }
        let flag = false;
        for(let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = true;
                break;

            }

        }
        if (flag) {
            SumNonPrime += num;
        } else {
            sumPrime += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log (`Sum of all non prime numbers is: ${SumNonPrime}`);
}
sumPrimeNonPrime (["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
