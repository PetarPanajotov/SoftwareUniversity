function newHouse (input) {
    let flower = input[0]; // "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    let number = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let discount = 1;
    switch (flower) {
        case "Roses":
            price = 5;
        if (number > 80) {
            discount = 0.9;
        } break;
        case "Dahlias":
            price = 3.80;
        if (number > 90) {
            discount = 0.85;
        } break;
        case "Tulips":
            price = 2.80;
        if (number > 80) {
            discount = 0.85;
        } break;
        case "Narcissus":
            price = 3;
        if (number < 120) {
            discount = 1.15;
        } break;
        case "Gladiolus":
            price = 2.50;
        if (number < 80) {
            discount = 1.20;
        } break;
    }
    price = number * price * discount;
    let money = Math.abs(budget - price);
    if (budget >= price) {
        console.log (`Hey, you have a great garden with ${number} ${flower} and ${money.toFixed(2)} leva left.`)
    } else {
        console.log (`Not enough money, you need ${money.toFixed(2)} leva more.`)
    }
}
newHouse (["Tulips",
"88",
"260"])

