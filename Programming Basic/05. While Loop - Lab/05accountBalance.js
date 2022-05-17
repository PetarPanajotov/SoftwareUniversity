function accountBalance (input) {
    let index = 0;
    let allMoney = 0;

    while (true) {
        let data = input[index];
        if (data === "NoMoreMoney") {
            break;
        }
        let Currentincrease = Number(data);
        if (Currentincrease <= 0) {
            console.log (`Invalid operation!`);
            break;
        }
        allMoney += Currentincrease
        console.log(`Increase: ${Currentincrease.toFixed(2)}`);
        index++
        
    }
    console.log (`Total: ${allMoney.toFixed(2)}`)
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])

