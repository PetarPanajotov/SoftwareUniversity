function christmas (input) {
    let num = 0;
    let index = 0;
    let counter1 = 0;
    let counter2 = 0;
    while(num !== "Christmas") {
        num = Number(input[index])
        index++ 
        if (num > 16) {
            counter1++;
        } else if (num <= 16) {
            counter2++;
        }
        num = input[index];
    }
    let moneyToys = counter2 * 5;
    let moneySweaters = counter1 * 15;
    console.log (`Number of adults: ${counter1}`);
    console.log (`Number of kids: ${counter2}`);
    console.log (`Money for toys: ${moneyToys}`);
    console.log (`Money for sweaters: ${moneySweaters}`);
}
christmas(["16",
"16",
"16",
"16",
"16",
"Christmas"])
