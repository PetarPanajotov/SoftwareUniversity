function repainting(input) {
    
    let nylon = Number(input[0]);        // 1.50 лв. за кв. метър
    let painting = Number(input[1]);     // Боя - 14.50 лв. за литър
    let thinner = Number(input[2]);      // Разредител за боя - 5.00 лв. за литър
    let hours = Number(input[3]);

    let nylonPriceWithReserve = (nylon + 2) * 1.50; // резерв от 2кв. метра найлон
    let paitingPriceWithReserve = (painting * 1.10) * 14.50;  // резерв от 10% боя
    let thinnerPrice = (thinner * 5.00);

    let materialsPrice = nylonPriceWithReserve + paitingPriceWithReserve + thinnerPrice + 0.40; // 0.40 стотинки за торбички
    
    let workPaymentPerHour = materialsPrice * (30 / 100);
    let workPayment = hours * workPaymentPerHour;

    let repaitingcost = materialsPrice + workPayment;

    console.log (repaitingcost);

}
repainting(["10" , "11" , "4" , "8"]);
repainting(["5" , "10" , "10" , "1"]);