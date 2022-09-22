// In the era of heroes, every hero has his items that make him unique. Create a function that creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format.
function heroicInventory (arr) {
    let result = [];
    for (let index of arr) {
        index = index.split(' / ');
        let items = []
        if (index[2]) {
        items = index[2].split(', ')
        }
        result.push({name: index[0],
        level: Number(index[1]),
        items: items})
    }
    console.log(JSON.stringify(result))
}
heroicInventory(['Isacc / 25 / wtf',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1']
)