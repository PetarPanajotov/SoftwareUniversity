function revealWord (words, sentence) {
    words = words.split(", ")
    for(let index of words) {
        if(sentence.includes("*".repeat(index.length))) {
            sentence = sentence.replace("*".repeat(index.length), index)
        }
    }
    console.log(sentence)
}
revealWord('great, learning',

'softuni is ***** place for ******** new programming languages')