function cleverLily (input) {
    let index = 0;

    let age = Number(input[index]);
    index++

    let washingMachine = Number(input[index]);
    index++

    let toyPrice = Number(input[index]);
    index++

    let money = 0;
    let toyCounter = 0;
    let priceforAllToys = 0;
    let currentMoney = 10;
    let savedMoney = 0;


    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += currentMoney;
            currentMoney += 10;
            money--;
        } else {
            toyCounter++
            priceforAllToys = toyPrice * toyCounter;
        }
    }
    priceforAllToys = toyCounter * toyPrice;
    savedMoney = priceforAllToys + money
    let moneyleft = Math.abs(savedMoney - washingMachine);
    if (savedMoney >= washingMachine) {
        console.log(`Yes! ${moneyleft.toFixed(2)}`)
    } else {
        console.log(`No! ${moneyleft.toFixed(2)}`)
    }  
}
cleverLily (["21",
"1570.98",
"3"])

