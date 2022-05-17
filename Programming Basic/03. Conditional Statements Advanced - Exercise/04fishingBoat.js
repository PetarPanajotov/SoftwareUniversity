function fishingBoat (input) {
    let budget = Number(input[0]);
    let season = input[1]; // "Spring", "Summer", "Autumn", "Winter"
    let fishers = input[2];
    let price = 0;
    let discount = 1;
    let oddDiscount = 1;
    switch (season) {
        case "Spring": price = 3000; break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter": price = 2600; break;   
    }
    if (fishers <= 6 && fishers >= 0) {
        discount = 0.90;
    } else if (fishers >= 7 && fishers <= 11) {
        discount = 0.85;
    } else if (fishers >= 12) {
        discount = 0.75;
    }
    if (fishers % 2 == 0 && season != "Autumn") {
        oddDiscount = 0.95
    }
    price = price * discount * oddDiscount;
    let money = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
    }
}
fishingBoat (["2000",
"Winter",
"13"])


