function toyShop (input) {
    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let plushBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckToyCount = Number(input[5]);
    let allToysCount = puzzleCount + talkingDollCount + plushBearCount + minionsCount + truckToyCount;
    let price = puzzleCount * 2.60 + talkingDollCount * 3 + plushBearCount * 4.10
    + minionsCount * 8.20 + truckToyCount * 2;
    let discount = 0
    if (allToysCount >= 50) {
        discount = price * 0.25
    }
    let priceWithDiscount = price - discount;
    let profit = priceWithDiscount - priceWithDiscount * 0.1;
    let money = Math.abs(profit - vacationPrice);
    if (profit >= vacationPrice) {
        console.log(`Yes! ${money.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${money.toFixed(2)} lv needed.`)
    }
}
toyShop (["320",
"8",
"2",
"5",
"5",
"1"])

