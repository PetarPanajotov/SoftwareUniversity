function houseParty(arr) {
    let copyofArr = arr.slice()
    let guest = [];
    let otherCommandsArr = []
    for (let i = 0; i < arr.length; i++) {
        let tempArr = copyofArr
                        .shift()
                        .split(" ")
        let name = tempArr.shift();
        let index = guest.indexOf(name)
        if(tempArr[1] === "going!") {
            if(index !== - 1) {
                otherCommandsArr.push(name + " " + "is already in the list!")
            } else {
            guest.push(name)
            }
        } else {
            if (index === -1) {
                otherCommandsArr.push(name + " " + "is not in the list!")
            } else {
                guest.splice(index, 1)
            }
        }
    }
    otherCommandsArr.push(guest.join('\n')); 
    console.log(otherCommandsArr.join("\n"))
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])