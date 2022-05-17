function courierExpress (input) {
    let kilograms = Number(input[0]);
    let service = input[1];
    let distance = Number(input[2]);

    let price = 0;
    let percent = 0

    if (service === "standard") {
        if (kilograms < 1) {
            price = 0.03;
        } else if (kilograms > 1 && kilograms < 10) {
            price = 0.05;
        } else if (kilograms >= 10 && kilograms < 40) {
            price = 0.10;
        } else if (kilograms >= 40 && kilograms < 90) {
            price = 0.15;
        } else if (kilograms >= 90 && kilograms < 150) {
            price = 0.20;
        }
    } else {
        if (kilograms < 1) {
            price = 0.03;
            percent = 0.8;
        } else if (kilograms > 1 && kilograms < 10) {
            price = 0.05;
            percent = 0.4;
        } else if (kilograms >= 10 && kilograms < 40) {
            price = 0.10
            percent = 0.05;
        } else if (kilograms >= 40 && kilograms < 90) {
            price = 0.15;
            percent = 0.02;
        } else if (kilograms >= 90 && kilograms < 150) {
            price = 0.20;
            percent = 0.01

        }
    }
    let finalPrice = price * distance;
    let moreCost = price * percent * kilograms * distance;
    finalPrice = finalPrice + moreCost
    console.log (`The delivery of your shipment with weight of ${kilograms.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`)
}
courierExpress ([
    "87" ,
    "express" ,
    "130"	
])