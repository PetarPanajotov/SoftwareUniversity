function makeaDictionary(arrJSON) {
    let myObj = {}
    let arr = []
    for (let el of arrJSON) {
        let currentDefinition = JSON.parse(el)
        let key = Object.keys(currentDefinition)
        let value = Object.values(currentDefinition)
        myObj[key] = value
    }
    for (let key of Object.keys(myObj)) {
        arr.push(key)
    }
    arr = arr.sort((a,b) => a.localeCompare(b))
    for(let key of arr) {
        console.log(`Term: ${key} => Definition: ${myObj[key]}`)
    }
}

makeaDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])