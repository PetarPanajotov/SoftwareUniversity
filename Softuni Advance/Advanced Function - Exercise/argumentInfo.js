function argumentInfo(...input) {
    let result = {};
    for(let index of input) {
        if (!result.hasOwnProperty(typeof index)) {
        result[typeof index] = []
        }
        result[typeof index].push(index)
        console.log(`${typeof index}: ${index}`)
    }
    let buff = ""
    let keysSorted = Object.entries(result).sort((a, b) => b[1].length-a[1].length)
    for(let key of keysSorted) {
        buff += `${key[0]} = ${key[1].length}\n`
    }
    console.log(buff)
}
argumentInfo(3.333, 9.999, { name: 'gr'}, { name: 'bob'})