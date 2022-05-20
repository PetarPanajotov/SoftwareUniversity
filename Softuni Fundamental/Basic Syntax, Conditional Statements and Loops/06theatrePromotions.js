function theatrePromotions (day, ages) {
    let price
    let boolean = true
    if (ages >= 0 && ages <= 18) {
        switch (day) {
            case "Weekday": price = 12; break;
            case "Weekend": price = 15; break;
            case "Holiday": price = 5; break;
        }
    }
    if (ages > 18 && ages <= 64) {
        switch (day) {
            case "Weekday": price = 18; break;
            case "Weekend": price = 20; break;
            case "Holiday": price = 12; break;
        }
    }
    if (ages > 64 && ages <= 122) {
        switch (day) {
            case "Weekday": price = 12; break;
            case "Weekend": price = 15; break;
            case "Holiday": price = 10; break;
        }
    }
    if (ages > 122 || ages < 0) {
        console.log ("Error!")
        boolean = false
    }
    if (boolean) {
        console.log (price + "$")
    }
}
theatrePromotions('Weekday', 124)