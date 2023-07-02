function pascalCaseSplitter(sentence) {
    let currentword = "";
    let arrOfWords = [];
    let flag = true;
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (i === 0) {
            currentword+= letter;
            continue;
        }
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
            arrOfWords.push(currentword)
            currentword = ""
            currentword+= letter
            continue;
        }
        currentword+= letter;
    }
    arrOfWords.push(currentword)
    console.log(arrOfWords.join(", "))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')