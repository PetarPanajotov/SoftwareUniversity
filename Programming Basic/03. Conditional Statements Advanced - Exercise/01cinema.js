function cinema (input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;
    switch (projection) {
        case "Premiere": price = 12.00; break;
        case "Normal": price = 7.50; break;
        case "Discount": price = 5.00; break;
    }
    let income = rows * columns * price;
    console.log(`${income.toFixed(2)} leva`)
}
cinema (["Premiere",
"10",
"12"])
