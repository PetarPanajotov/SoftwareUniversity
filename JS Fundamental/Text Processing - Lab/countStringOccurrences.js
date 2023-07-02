function countStringOccurrences(sentence, word) {
    let words = sentence.split(" ")
    let counter = 0;
    for (let index of words) {
        if(index === word) {
            counter++
        }
    }
    console.log(counter)
}
countStringOccurrences('This is a word and it also is a sentence',

'is')