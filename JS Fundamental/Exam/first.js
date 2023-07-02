function cookingMasterclass (input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceFlour = Number(input[2]);
    let priceEgg = Number(input[3]);
    let priceApron = Number(input[4]);
    
    let counter = 0;
    for(let i = 5; i <= students; i+= 5) {
        if(i % 5 === 0) {
            counter++
        }
    }

    let apronPriceForAllStudents = priceApron * (Math.ceil((students * 1.2)));
    let eggsPriceForAllStudenets = priceEgg * 10 * students;
    let packagePriceForAllStudents = priceFlour * (students - counter);

    let allMoney = apronPriceForAllStudents + eggsPriceForAllStudenets + packagePriceForAllStudents;
    let isBudgetEnough = Math.abs(budget - allMoney)
    if(budget >= allMoney) {
        console.log(`Items purchased for ${allMoney.toFixed(2)}$.`)
    } else {
        console.log(`${isBudgetEnough.toFixed(2)}$ more needed.`)
    }
}
cookingMasterclass([100, 25, 4, 1, 6])