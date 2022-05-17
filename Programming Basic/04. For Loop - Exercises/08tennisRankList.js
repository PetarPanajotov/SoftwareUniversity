function tennisRankList (input) {
    let index = 0;
    
    let tournamets = Number(input[index]);
    index++

    let starterPoints = Number(input[index])
    index++

    let winCounter = 0;
    let winPoints = 0;
    let finalPoints = 0;
    let semiPoints = 0;

    for (let i = 0; i < tournamets; i++) {
        let tournametInfo = input[index];
        index++

        if (tournametInfo === "W") {
            winCounter++;
            winPoints += 2000;
        } else if (tournametInfo === "F") { 
            finalPoints += 1200;
        } else if (tournametInfo === "SF") {
            semiPoints += 720;
        }
    }
    let points = starterPoints + winPoints + finalPoints + semiPoints; 
    let averagePoints = (points - starterPoints) / tournamets;
    let winTournamets = (winCounter / tournamets) * 100;
    console.log (`Final points: ${points}`)
    console.log (`Average points: ${Math.floor(averagePoints)}`)
    console.log (winTournamets.toFixed(2) + "%")
}
tennisRankList (["4",
"750",
"SF",
"W",
"SF",
"W"])

