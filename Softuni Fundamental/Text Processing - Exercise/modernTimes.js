function modernTimes(sentence) {
    let arrofSentence = sentence.split(" ")
    let boolean = false;
    for (let index of arrofSentence) {
        if (index.includes("#") && index.length > 1) {
            index = index.substring(1)
            for (let letter of index) {
                letter = letter.charCodeAt()
                if (letter > 64 && letter < 122) {
                } else {
                    boolean = true
                }
            }
            if (!boolean) {
                console.log(index)
            }
        }
        boolean = false
    }
}
    modernTimes('Nowadays everyone uses # to tag a #speci1al word in #socialMedia')