function suppliesForSchool(input) {

    let pensPackage = Number(input[0]);
    let markerPackage = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let discountPercent = Number(input[3]);

    let discount = discountPercent / 100;
    let sumWithoutDiscount = pensPackage * 5.80 + markerPackage * 7.20 + boardCleaner * 1.20;
    let savedMoney = sumWithoutDiscount * discount;
    let sumNeeded = sumWithoutDiscount - savedMoney;

    console.log (sumNeeded);

}
suppliesForSchool(["2" , "3" , "4" , "25"]);
suppliesForSchool(["4" , "2" , "5" , "13"]);