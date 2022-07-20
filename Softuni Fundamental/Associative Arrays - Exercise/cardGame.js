function cardGame(arr) {
    let cardPoints = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    let typePoints = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let playersPoints = {};
    let map = new Map()
    for (let index of arr) {
        index = index.split(": ")
        let name = index.shift()
        let cards = index.shift().split(", ")
        if (map.has(name)) {
            let oldCards = map.get(name)
            for (let i of cards) {
                oldCards.push(i)
            }
            map.set(name, oldCards)
        } else {
        map.set(name, cards)
        }
    }
    for(let [name, value] of map) {
        let set = new Set()
        let points = 0
        for(let card of value) {
            set.add(card)
        }
        for(let card of set) {
            let [power, type] = card
            if(power === "1") {
                power = 10
                type = card[2]
            }
            points += cardPoints[power] * typePoints[type]
        }
        playersPoints[name] = points
    }
    for(let key in playersPoints) {
        console.log(`${key}: ${playersPoints[key]}`)
    }
}
cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])