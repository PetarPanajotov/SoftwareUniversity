function race(input) {
    let racerPerson = input.shift().split(", ")
    let raceObj = {};
    let patternNames = /[A-Za-z]+/g
    let patternDistance = /\d+/g
    input.pop();
    for (let index of racerPerson) {
        raceObj[index] = 0;
    }
    let distanceCounter = 0;
    for (let index of input) {
        let name = index.match(patternNames).join("");
        let distance = index.match(patternDistance).join("");
        if(raceObj.hasOwnProperty(name)) {
            let oldDistance = raceObj[name];
            for(let num of distance) {
                num = Number(num);
                distanceCounter+= num
            }
            raceObj[name] = oldDistance + distanceCounter
        }
        distanceCounter = 0; 
    }
    let unsortArr = []
    for(let entry of Object.entries(raceObj)) {
        unsortArr.push(entry);
    }
    let sortArr = unsortArr.sort((a,b) => b[1] - a[1])
    console.log(`1st place: ${sortArr[0][0]}`);
    console.log(`2nd place: ${sortArr[1][0]}`);
    console.log(`3rd place: ${sortArr[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])