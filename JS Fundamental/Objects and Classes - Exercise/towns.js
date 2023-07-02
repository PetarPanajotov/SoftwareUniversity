function towns(arr) {
    let myObj = {
        town: undefined,
        latitude: 0,
        longitude: 0,
    }
    for (let input of arr) {
        let splittedArr = input.split(" | ")
        myObj.town = splittedArr.shift();
        myObj.latitude = Number(splittedArr.shift()).toFixed(2);
        myObj.longitude = Number(splittedArr.shift()).toFixed(2);
        console.log(myObj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);