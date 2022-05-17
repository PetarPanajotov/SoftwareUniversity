function oscars (input) {
    let index = 0;

    let name = input[index];
    index++;

    let pointsAcademy = Number(input[index]);
    index++;

    let judge = Number(input[index]);
    index++;

    let points = 0;
    let pointsCount = 0

    let isProgramHaveToStop = true;

    for (let i = 1; i <= judge; i++) {
        let nameJudge = input[index];
        index++;
        let pointsJudge = Number(input[index]);
        index++;

        points = (nameJudge.length * pointsJudge) / 2;
        if (i === 1) {
            pointsCount = points + pointsAcademy
        } else {
            pointsCount += points;
        }
        if (pointsCount > 1250.5) {
            isProgramHaveToStop = false
            console.log (`Congratulations, ${name} got a nominee for leading role with ${pointsCount.toFixed(1)}!`)
            break;
        }
    }
    if (isProgramHaveToStop === true) {
    pointsCount = Math.abs (pointsCount - 1250.5)
    console.log (`Sorry, ${name} you need ${pointsCount.toFixed(1)} more!`)
    }
}
oscars (["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

