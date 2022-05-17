function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let country = "";
    let cost = 0;
    let restPlace = "";

    if (budget <= 100) {
        country = "Bulgaria"
        if (season === "summer") {
            cost = budget * 0.3;
            restPlace = "Camp" 
        } else {
            cost = budget * 0.7;
            restPlace = "Hotel"
        }
    } else if (budget <= 1000) {
        country = "Balkans";
        if (season === "summer") {
            cost = budget * 0.4;
            restPlace = "Camp"
        } else {
            cost = budget * 0.8;
            restPlace = "Hotel"
        }
    } else {
        country = "Europe";
        cost = budget * 0.9;
        restPlace = "Hotel"
    }
    console.log (`Somewhere in ${country}`);
    console.log (`${restPlace} - ${cost.toFixed(2)}`);
}

journey (["1500", "summer"])
