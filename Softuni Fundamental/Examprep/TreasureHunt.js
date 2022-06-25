function treasureHunt(arr) {
    let splitedArr = arr.shift().split("|")
    let index = 0;
    let element = arr[index]
    let stolenItems = [];
    let result = 0;
    let boolean = false;


    while (element !== "Yohoho!") {
        let items = element.split(" ")
        let command = items.shift()
        switch(command) {
            case "Loot": 
                for (let i = 0; i < items.length; i++) {
                    let currentLoot = items[i];
                    let checker = splitedArr.indexOf(currentLoot)
                    if (checker === -1) {
                    splitedArr.unshift(currentLoot)
                    }
                }; break;
            case "Drop":
                items = items.map(Number)
                if (items < splitedArr.length - 1 && items >= 0) {
                 let droppedItem = splitedArr.splice(items, 1);
                 splitedArr.push(droppedItem[0]);
                }; break;
            case "Steal":
                if (items > splitedArr.length) {
                    items = splitedArr.length;
                }
                stolenItems = splitedArr.splice(-items);
                console.log(stolenItems.join(", "))
            break;
                
        }
                index++
        element = arr[index]
    }
    if (splitedArr.length > 0) {
        boolean = true
        for(let i = 0; i < splitedArr.length; i++) {
            result += splitedArr[i].length
        }
    }
    result = result / splitedArr.length
    if (boolean) {
    console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`)
    }
}
treasureHunt((["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]))