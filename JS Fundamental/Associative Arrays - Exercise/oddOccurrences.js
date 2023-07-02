function oddOccurrences(input) {
    let splittedArr = input.split(" ");
    let map = new Map();
    let newArr = []
    for (let index of splittedArr) {
        index = index.toLowerCase();
        if (map.has(index)) {
            let oldValue = map.get(index)
            map.set(index, oldValue + 1)
        } else {
            map.set(index, 1)
        }
    }
    for (let [key, value] of map) {
        if(map.get(key) % 2 === 0) {
            continue
        }
        newArr.push(key)
    }
    console.log(newArr.join(" "))
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')