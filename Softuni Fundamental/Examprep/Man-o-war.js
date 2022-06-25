function manowar(arr) {
    let copyofArr = arr.slice();
    let pirateShipStatus = copyofArr.shift().split(">").map(Number)
    let warshipStatus = copyofArr.shift().split(">").map(Number)
    let maxHealth = copyofArr.shift()
    let index = 0;
    let element = copyofArr[index]
    maxHealth = Number(maxHealth)
    while (element !== "Retire") {
        let currentIndex = element.split(" ");
        let command = currentIndex.shift();
        switch (command) {
            case "Fire":
                let section = Number(currentIndex[0]);
                let damageAttack = Number(currentIndex[1]);
                if (section < warshipStatus.length && section >= 0) {
                    let damageDoneAttack = warshipStatus[section] - damageAttack;
                    if (damageDoneAttack <= 0) {
                        console.log("You won! The enemy ship has sunken.")
                        return
                    }
                    warshipStatus.splice(section, 1, damageDoneAttack)
                }
                break;
            case "Defend":
                let startIndex = Number(currentIndex[0]);
                let endIndex = Number(currentIndex[1]);
                let damageDefend = Number(currentIndex[2]);
                let defendArr = [];
                let damageDoneDefend = [];
                let defendCount = 0
                if (startIndex < pirateShipStatus.length && endIndex < pirateShipStatus.length && startIndex >= 0 && endIndex >= 0) {
                    damageDoneDefend = pirateShipStatus.slice(startIndex, endIndex+1)
                    for (let el of  damageDoneDefend) {
                        let resultDefend = el - damageDefend
                        defendArr.push(resultDefend)
                        if (resultDefend <= 0) {
                            console.log("You lost! The pirate ship has sunken.")
                            return;
                        }
                    }
                    for (let el of defendArr) {
                        let currentEl = el
                        pirateShipStatus.splice(defendCount, 1, currentEl)
                        defendCount++
                    }
                }
                break;
            case "Repair":
                let indexHeal = Number(currentIndex[0])
                let heal = Number(currentIndex[1]);
                if (indexHeal < pirateShipStatus.length && indexHeal >= 0) {
                    let sectionToBeHealed = pirateShipStatus[indexHeal] + heal
                    if (sectionToBeHealed > maxHealth) {
                        sectionToBeHealed = maxHealth;
                    }
                    pirateShipStatus.splice(indexHeal, 1, sectionToBeHealed)
                }
                break;
            case "Status":
                let warning = maxHealth * 0.2;
                let counter = 0;
                for (let el of pirateShipStatus) {
                    if (el < warning) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`)
                break;
        }
        index++;
        element = copyofArr[index];
    }
        let warshipResult = 0;
        let pirateShipResult = 0;
        for (let i = 0; i < warshipStatus.length; i++) {
            let currentElement = warshipStatus[i];
            warshipResult += currentElement
        }
        for (let i = 0; i < pirateShipStatus.length; i++) {
            let currentElement = pirateShipStatus[i];
            pirateShipResult += currentElement
        }
        console.log(`Pirate ship status: ${pirateShipResult}`)
        console.log(`Warship status: ${warshipResult}`)
}
manowar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 111",
"Status",
"Retire"])


