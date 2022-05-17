function smallShop (input) {
    let product = input[0];
    let town = input[1];
    let amount = Number(input[2]);
    let price = 0;
    if (town === "Sofia") {
        switch (product) {
            case "coffee": price = 0.5 * amount; break;
            case "water": price = 0.8 * amount; break;
            case "beer": price = 1.2 * amount; break;
            case "sweets": price = 1.45 * amount; break;
            case "peanuts": price = 1.60 * amount; break;
        }
    }    
    else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": price = 0.4 * amount; break;
            case "water": price = 0.7 * amount; break;
            case "beer": price = 1.15 * amount; break;
            case "sweets": price = 1.30 * amount; break;
            case "peanuts": price = 1.50 * amount; break;
        }
    }
    else if (town === "Varna") {
        switch (product) {
            case "coffee": price = 0.45 * amount; break;
            case "water": price = 0.7 * amount; break;
            case "beer": price = 1.10 * amount; break;
            case "sweets": price = 1.35 * amount; break;
            case "peanuts": price = 1.55 * amount; break;
        }
    }
    console.log(price);
}
smallShop (["coffee",
"Varna",
"2"])
