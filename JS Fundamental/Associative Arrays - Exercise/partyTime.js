function partyTime (arr) {
    let vip = [];
    let regular = [];
    
    let index = arr.shift()
    while(index !== "PARTY") {
        let fromAsci = index[0].charCodeAt()
        if (fromAsci < 48 || fromAsci > 57) {
            regular.push(index)
        } else {
            vip.push(index)
        }
        index = arr.shift()
    }
    for (let index of arr) {
        if(vip.includes(index)) {
            let indexCheck = vip.indexOf(index)
            vip.splice(indexCheck, 1)
            
        } else if (regular.includes(index)) {
            let indexCheck = regular.indexOf(index)
            regular.splice(indexCheck, 1)
        }
    }
    console.log(vip.length + regular.length)
    vip.forEach(el => console.log(el))
    regular.forEach(el => console.log(el))
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)