function destinationMapper(input){
    let pattern = /([= | \/])[A-Z][A-Za-z]{2,}\1/gm;
    let validLocation = input.match(pattern);
    let arrofDestinations = [];
    let regFirst = new RegExp("=", "g");
    let regSecond = new RegExp("/", "g");
    if (validLocation !== null) {
        for (let index of validLocation) {
            index = index.replace(regFirst, "").replace(regSecond, "");
            arrofDestinations.push(index);
        }
        validLocation = arrofDestinations.join("")
        console.log(`Destinations: ${arrofDestinations.join(", ")}`)
        console.log(`Travel Points: ${validLocation.length}`)
    } else {
        console.log(`Destinations: ${arrofDestinations.join(", ")}`)
        console.log(`Travel Points: 0`)

    }
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper(("ThisIs some InvalidInput"))