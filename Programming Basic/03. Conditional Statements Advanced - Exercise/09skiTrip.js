function skiTrip (input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];

    let discount = 0;
    let money = 0;
    let gradeDiscount = 0;
    days = days - 1;

    switch (room) {
        case "room for one person":
            money = 18.00;
        break;
        case "apartment":
            money = 25.00;
            if (days < 10) {
                discount = 30;
            } else if (days > 10 && days < 15) {
                discount = 35;
            } else {
                discount = 50;
            }
        break;
        case "president apartment":
            money = 35.00;
            if (days < 10) {
                discount = 10;
            } else if (days > 10 && days < 15) {
                discount = 15;
            } else {
                discount = 20;
            }
        break;
    }
    money = (money * (days))- ((money * days) * (discount / 100));
    if (grade === "positive") {
        gradeDiscount = 1.25;
    } else if (grade === "negative") {
        gradeDiscount = 0.90;
    }
    money = money * gradeDiscount;
    console.log (money.toFixed(2));
}
skiTrip (["2",
"apartment",
"positive"])

