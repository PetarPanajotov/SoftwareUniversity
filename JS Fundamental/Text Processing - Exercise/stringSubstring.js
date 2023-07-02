function stringSubstring(word, sentence) {
    let arrSentence = sentence.split(" ")
    for(let index of arrSentence) {
        index = index.toLowerCase();
        if (word === index) {
            console.log(word);
            return
        }
    }
    console.log(`${word} not found!`)
}
stringSubstring('python',

'JavaScript is the best programming language')