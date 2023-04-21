function aggregateElements (arr) {
    let sum = 0;
    let inversesum = 0;
    let concat = ""
    for (let index of arr) {
        sum+= index;
        inversesum+= 1/index;
        concat += index
    }
    console.log(`${sum}\n${inversesum}\n${concat}`)
}
aggregateElements([1, 2, 3]);