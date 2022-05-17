function foodDelivery(input) {
    let chickenMenu = Number(input[0]);         // Пилешко меню - 10.35 лв.
    let fishMenu = Number(input[1]);            // Меню с риба - 12.40 лв.
    let VegetarianMenu = Number(input[2]);      // Вегетарианско меню - 8.15 лв.

    let menuPrice = chickenMenu * 10.35 + fishMenu * 12.40 + VegetarianMenu * 8.15;
    let dessertPrice = menuPrice * (20 / 100);  // Десерт 20% от общата сметка

    let order = menuPrice + dessertPrice + 2.50;// Доставката е 2.50 лв.
    console.log (order);

}
foodDelivery(["2" , "4" , "3"]);
foodDelivery(["9" , "2" , "6"]);