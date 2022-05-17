function cake (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    
    let l = Number(input[index]);
    index++;

    let pieces = input[index];
    index++

    let cake = l*w;
    let numberOfPieces = 0;
    let piecesCount = 0;
    let notEnough = 0;
    let flag = true;

    while (pieces !== "STOP") {
        numberOfPieces = Number([pieces]);
        piecesCount+= numberOfPieces

        if (piecesCount >= cake) {
            notEnough = Math.abs(cake - piecesCount);
            console.log (`No more cake left! You need ${notEnough} pieces more.`);
            flag = false
            break;
        }
        pieces = input[index];
        index++
    }
    if (flag){
        notEnough = Math.abs(cake - piecesCount);
    console.log (`${notEnough} pieces are left.`)
    }
}
cake (["10",
"2",
"2",
"4",
"6",
"STOP"])


