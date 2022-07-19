function wordOccurrences(arr) {
    let map = new Map()
    let index = 0;
    for (let index of arr) {
        if(map.has(index)) {
            counter = map.get(index)
            map.set(index, counter + 1)
        } else {
            map.set(index, 1)
        }
    }
    let sort = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
    for (let [word, count] of sort) {
        console.log(word, "->", count, "times")
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])