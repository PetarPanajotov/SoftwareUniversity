function invertory(arr) {
    let sortedbyLevels = [];
    let arrSplit = []

    for (let index of arr) {
        let hero = index.split(" / ")
        sortedbyLevels.push({ name: hero[0], level: hero[1], items: hero[2] })
    }
    sortedbyLevels = sortedbyLevels.sort((a, b) => a.level - b.level)
    for (let index of sortedbyLevels) {
        for (let key of Object.keys(index)) {
            if (key === 'name') {
                console.log(`Hero: ${index[key]}`)
            } else {
                console.log(`${key} => ${index[key]}`)
            }
        }
    }
}
invertory([

    'Batman / 2 / Banana, Gun',

    'Superman / 18 / Sword',

    'Poppy / 28 / Sentinel, Antara'

])