function christmas (input) {
    let rollsPaper = Number(input[0]);
    let rollsFabric = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let price = rollsPaper * 5.80 + rollsFabric * 7.20 + glue * 1.20;
    discount = discount / 100;

    discountedPrice = price * discount;
    let finalPrice = price - discountedPrice;
    console.log (finalPrice.toFixed(3))
}
christmas (["4" ,
    "2" ,
    "5" ,
    "13" ,
    ])