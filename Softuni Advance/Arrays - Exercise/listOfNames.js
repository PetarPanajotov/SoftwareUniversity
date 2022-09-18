// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
function listOfNames (arr) {
    let sortedNames = arr.sort((a,b) => a.localeCompare(b))
    for (let i = 1; i <= sortedNames.length; i++) {
        console.log(`${i}.${sortedNames[i-1]}`)
    }
}
listOfNames(["John",

"Bob",

"Christina",

"Ema"])