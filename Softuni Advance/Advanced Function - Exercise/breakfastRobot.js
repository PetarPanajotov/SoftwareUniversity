function solution() {
    let recipeObj = {
        "apple": { "carbohydrate": 1, "flavour": 2 },
        "lemonade": { "carbohydrate": 10, "flavour": 20 },
        "burger": { "carbohydrate": 5, "flavour": 3, "fat": 7 },
        "eggs": { "protein": 5, "fat": 1, "flavour": 1 },
        "turkey": { "protein": 10, "carbohydrate": 10, "fat": 10, "flavour": 10 }
    }
    let robotQuantity = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };
    let buff = ''
    return function (info) {
        let arrInfo = info.split(' ')
        let [commandInfo, ingridiantInfo, quantityInfo] = arrInfo;
        quantityInfo = Number(quantityInfo)
            let commandsObj = {
            restock: (microelement, quantity) => {
                if (robotQuantity.hasOwnProperty(microelement)) {
                    robotQuantity[microelement] = robotQuantity[microelement] + quantity
                }
                return buff = 'Success'
            },
            prepare: (recipe, quantity) => {
                let currentRecipe = recipeObj[recipe]
                for (let [ingr, quantityForOne] of Object.entries(currentRecipe)) {
                    let qunatityForAll = quantity * quantityForOne
                    if (!robotQuantity.hasOwnProperty(ingr) || robotQuantity[ingr] < qunatityForAll) {
                        return buff = `Error: not enough ${ingr} in stock`
                    }
                    robotQuantity[ingr] = robotQuantity[ingr] - qunatityForAll;
                }
                return buff = 'Success'
            },
            report: () => {
                buff = `protein=${robotQuantity['protein']} carbohydrate=${robotQuantity['carbohydrate']} fat=${robotQuantity['fat']} flavour=${robotQuantity['flavour']}`
                return buff;
            }
        }
        commandsObj[commandInfo](ingridiantInfo,quantityInfo);
        return buff;
    }
}
let manager = solution ();

console.log (manager("restock carbohydrate 10"));
console.log (manager("restock flavour 10"));
console.log (manager("prepare apple 1"));
console.log (manager("restock fat 10"));
console.log (manager("prepare burger 1"));
console.log (manager("report"));
