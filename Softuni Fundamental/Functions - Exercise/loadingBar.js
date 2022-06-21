function loadingBar(num) {
    let loadBar = [];
    let missingdBar = [];
    let symbolNeededForLoadBar = String.fromCharCode(37)
    let symbolNeededForMissingBar = String.fromCharCode(46)
    for (let i = 10; i <= num; i+= 10) {
        loadBar.push(symbolNeededForLoadBar) 
    }
    for (let j = num; j < 100; j+= 10) {
       loadBar.push(symbolNeededForMissingBar)
    }
    if (num < 100) {
        console.log(`${num}% [${loadBar.join("")}]`)
        console.log("Still loading...")
    } else {
        console.log(`${num}% Complete!`)
        console.log(`[${loadBar.join("")}]`)
    }
}
loadingBar(70)