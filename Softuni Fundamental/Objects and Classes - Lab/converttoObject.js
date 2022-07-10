function converttoObject (data) {
    let dataToJSON = JSON.parse(data)
    for (let key of Object.entries(dataToJSON)) {
        console.log (`${key[0]}: ${key[1]}`)
    }
}
converttoObject('{"name": "George", "age": 40, "town": "Sofia"}')