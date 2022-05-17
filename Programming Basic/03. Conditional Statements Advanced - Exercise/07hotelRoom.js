function hotelRoom (input) {
    let month = input[0];
    let stay = Number(input[1]);
    let priceForStudio = 0;
    let priceForApartament = 0;
    let discountForStudio = 0;
    let discountForApartament = 0;
        if (stay > 14) {
            discountForApartament = 10;
        }
    switch (month) {
        case "May": 
        case "October":
            priceForStudio = 50;
            priceForApartament = 65;
            if (stay <= 14 && stay > 7) {
                discountForStudio = 5;
            } else if (stay > 14) {
                discountForStudio = 30;          
            } break;
        case "June":
        case "September":
            priceForStudio = 75.20;
            priceForApartament = 68.70;
            if (stay > 14) {
                discountForStudio = 20;
            } break;
        default:
        priceForStudio = 76;
        priceForApartament = 77; break;
    } 
    let priceForVacationStudio = (stay * priceForStudio) - (stay * priceForStudio * (discountForStudio / 100));
    let priceForVacationApartament = (stay * priceForApartament) - (stay * priceForApartament * (discountForApartament / 100));
    console.log (`Apartment: ${priceForVacationApartament.toFixed(2)} lv.`);
    console.log (`Studio: ${priceForVacationStudio.toFixed(2)} lv.`)
}
hotelRoom (["June",
"14"])

