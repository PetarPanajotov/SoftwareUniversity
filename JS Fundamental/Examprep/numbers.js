function numbers(seq) {
    let sum = 0
    let splitted = seq.split(" ").map(Number)
    let arraytoPrint = []
    for (let el of splitted) {
        sum += el
    }
    sum = sum / splitted.length;

    for (let i = 0; i < splitted.length; i++) {
        let currentNum = splitted[i];
        if(currentNum > sum) {
            arraytoPrint.push(currentNum)
        }
    }
    if (arraytoPrint.length === 0) {
        console.log("No")
    } else {
        console.log(arraytoPrint.sort((a, b) => b - a)
                                .slice(0,5)
                                .join(" "))
    }
}
numbers('-1 -2 -3 -4 -5 -6')