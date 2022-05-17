function hairSailon (input) {
    let index = 0;
    let point = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let service = input[index];
    index++ 

    let price = 0;

    let mensHair = 0;
    let ladiesHair = 0;
    let kidHair = 0;

    let touchUpHair = 0;
    let fullColorHair = 0;

    let collectedMoney = 0
    let diff = 0;
    let flag = true;

    while (command !== "closed") {
        if (command === "haircut") {
            switch(service) {
                case "mens": price = 15.00; mensHair += price; break;
                case "ladies": price = 20.00; ladiesHair += price; break;
                case "kids": price = 10.00; kidHair += price; break;
            }
        } else if (command === "color") {
            switch(service) {
                case "touch up": price = 20.00; touchUpHair += price; break;
                case "full color": price = 30.00; fullColorHair += price; break;

            }
        }
        collectedMoney = mensHair + ladiesHair + kidHair + touchUpHair + fullColorHair
        if (collectedMoney >= point) {
            diff = Math.abs(collectedMoney - point)
            flag = false;
            console.log (`You have reached your target for the day!`)
            console.log (`Earned money: ${collectedMoney}lv.`)
            break;
        }
        command = input[index];
        index++;
        
        service = input[index];
        index++;
    }
    if (flag) {
    diff = Math.abs (collectedMoney - point)
    console.log (`Target not reached! You need ${diff}lv. more.`)
    console.log (`Earned money: ${collectedMoney}lv.`)
    }
}
hairSailon ([
"50" ,
"color" ,
"full color" ,
"haircut" ,
"ladies" ,
])