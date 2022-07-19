function piccolo (arr) {
    let obj = {};
    let newArr = []
    for (let token of arr) {
        token = token.split(", ")
        let [command, number] = token
        if (command === "IN") {
            obj[number] = command
        } else {
            delete obj[number]
        }
    }
    for(let key in obj) {
        newArr.push(key)
    }
    if(newArr.length === 0){
        console.log(`Parking Lot is Empty`)
        return
    } else {
    let sortArr = newArr.sort((a,b) => a.localeCompare(b));
        for(let index of sortArr) {
            console.log(index)
        }
    }
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])