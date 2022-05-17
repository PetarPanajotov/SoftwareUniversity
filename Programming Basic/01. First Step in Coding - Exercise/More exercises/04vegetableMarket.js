function vegetableMarket (input) {
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let priceForVegetables = priceVegetables * kgVegetables;
    let priceForFruits = priceFruits * kgFruits;
    let price = priceForFruits + priceForVegetables;

    let priceInEuro = price / 1.94;
    let priceInEuroRounded = priceInEuro .toFixed(2);
    console.log (priceInEuroRounded);
}
vegetableMarket(["0.194" , "19.4" , "10" , "10"]);
vegetableMarket(["1.5" , "2.5" , "10" , "10"]);
