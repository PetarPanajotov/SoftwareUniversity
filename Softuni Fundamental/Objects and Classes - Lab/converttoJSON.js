function converttoJSON (name, lastName, hairColor) {
    let res = {
        name,
        lastName,
        hairColor
    }
    let dataJSON = JSON.stringify(res);
    console.log(dataJSON)
}
converttoJSON('George', 'Jones',

'Brown')