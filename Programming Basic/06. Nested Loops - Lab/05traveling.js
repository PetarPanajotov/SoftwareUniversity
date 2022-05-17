function traveling (input) {
    let index = 0
    let command = input[index];
    index++

    while(command !== "End") {
        let country = command;
        let sumNeeded = Number(input[index]);
        index++;
        let moneyCount = 0;
        while (moneyCount < sumNeeded) {
            let saveMoney = Number(input[index]);
            index++
            moneyCount += saveMoney
            saveMoney = Number(input[index])
        }
        command = input[index]
        index++
        console.log (`Going to ${country}!`);
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


