function wildZoo(input) {
    let animalObj = {};
    let tokens = input.shift().split(": ");
    let counter = 0;
    let areaObj = {}
    while (tokens[0] !== "EndDay") {
        let command = tokens.shift();
        let animalInfo = tokens.shift().split("-")
        let animal = animalInfo[0];
        let neededfood = animalInfo[1];
        let area = animalInfo[2];
        let oldInfo = animalObj[animal]
        switch (command) {
            case "Add":
                if (animalObj.hasOwnProperty(animal)) {
                    let old = Number(oldInfo[0]);
                    let add = old + Number(neededfood);
                    animalObj[animal] = []
                    animalObj[animal].push(add, area)
                } else {
                    animalObj[animal] = [];
                    animalObj[animal].push(neededfood, area)
                }
            break;
            case "Feed":
                if (animalObj.hasOwnProperty(animal)) {
                    let old = Number(oldInfo[0]);
                    let substract = old - Number(neededfood);
                    if (substract <= 0) {
                        console.log(`${animal} was successfully fed`);
                        delete animalObj[animal]
                    } else {
                        area = animalObj[animal].pop()
                        animalObj[animal] = []
                        animalObj[animal].push(substract, area)
                    }
                }
            break;
        }
        tokens = input.shift().split(": ")  
    }
    for(let [k,v] of Object.entries(animalObj)) {
        if (areaObj.hasOwnProperty(v[1])) {
            areaObj[v[1]] += 1
        } else {
            areaObj[v[1]] = 1;
        }
    }
    console.log(`Animals:`)
    for (let [k,v] of Object.entries(animalObj)) {
        console.log(` ${k} -> ${v[0]}g`)
    }
    console.log(`Areas with hungry animals:`)
    for (let [k,v] of Object.entries(areaObj)) {
        console.log(`${k}: ${v}`)
    }
}
wildZoo((["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])
)