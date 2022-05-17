function maidenParty (input) {
    let price = Number(input[0]);
    let loveMessages = Number(input[1]);
    let waxRose = Number(input[2]);
    let keychains = Number(input[3]);
    let caricatures = Number(input[4]);
    let wishes = Number(input[5]);

    let cost = loveMessages * 0.60 + waxRose * 7.20 + keychains * 3.60 + caricatures * 18.20 + wishes * 22;
    let articules = loveMessages + waxRose + keychains + caricatures + wishes;

    let discount = 0
    
    if (articules >= 25) {
        discount = 0.65;
        cost = cost * discount;
    }
    let hosting = cost * 0.90

    let isItEnough = Math.abs(hosting - price);

    if (hosting >= price) {
        console.log (`Yes! ${isItEnough.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${isItEnough.toFixed(2)} lv needed.`)
    }

}
maidenParty ([
    "320" ,
    "8" ,
    "2" ,
    "5" ,
    "5" ,
    "1" , 
    ])