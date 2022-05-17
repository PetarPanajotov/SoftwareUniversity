function godzillaVsKong (input) {
    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let clothingPerExtra = Number(input[2]);
    let decor = budget * 0.1;
    if (extra > 150) {
        clothingPerExtra = clothingPerExtra - clothingPerExtra * 0.1;
    }
    let budgetNeeded = clothingPerExtra*extra + decor;
    let budgetLeft = Math.abs(budget - ((clothingPerExtra*extra)+decor));
    if (budget >= budgetNeeded) {
        console.log (`Action!`);
        console.log (`Wingard starts filming with ${budgetLeft.toFixed(2)} leva left.`);
    } else {
        console.log (`Not enough money!`)
        console.log (`Wingard needs ${budgetLeft.toFixed(2)} leva more.`)
    }
}
godzillaVsKong (["9587.88",
"222",
"55.68"])

