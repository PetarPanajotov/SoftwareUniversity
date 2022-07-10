function heartDelivery(arr) {
    let copyofArr = arr.slice();
    let houses = copyofArr.shift()
                        .split("@")
                        .map(Number);
    let index = 0;
    let token = copyofArr[index]
    let currentPosition = 0;
    while(token !== "Love!") {
        token = token.split(" ")
        let command = Number(token[1]);
        currentPosition += command;
        if (currentPosition >= houses.length) {
            currentPosition = 0
        }
        if (houses[currentPosition] == 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`)
        } else {
            houses[currentPosition] -= 2
            if (houses[currentPosition] == 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`)
            }
        }
        index++
        token = copyofArr[index]
     } 
    let copyhouses = houses.slice();
    console.log(`Cupid's last position was ${currentPosition}.`)
    for (let el of copyhouses) {
        if(el <= 0) {
          houses.splice(houses.indexOf(el), 1)
        }
    }
    if (houses.length !== 0) {
        console.log(`Cupid has failed ${houses.length} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
}
heartDelivery(["2@4@2@2@6@2@2@5@3",
"Jump 2",
"Jump 2",
"Jump 2",
"Jump 4",
"Jump 4",
"Jump 4",
"Jump 4",
"Jump 4",
"Love!"])


