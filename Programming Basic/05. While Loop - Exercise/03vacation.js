function vacation (input) {
    let index = 0;

    let moneyNeeded = Number(input[index]);
    index++;

    let money = Number(input[index]);
    index++;

    let action = input[index];
    index++;

    let spent = Number(input[index]);
    index++;

    let dayCounter = 0;
    let moneyCount = 0

    while (true) {
        if (action === "spend") {
            money = money - spent;
            moneyCount++;
            if (money < 0) {
                money = 0;
            }
        }
        else {
            money = money + spent
            moneyCount = 0;
        }
        dayCounter++
        if (moneyCount === 5 || index >= input.length) {
            break;
        }
    action = input[index];
    index++;
    
    spent = Number(input[index]);
    index++ 
    }
    if (money >= moneyNeeded) {
    console.log (`You saved the money for ${dayCounter} days.`);
    } else { 
        console.log(`You can't save the money.`)
        console.log(dayCounter)

    }
}
vacation (["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])









