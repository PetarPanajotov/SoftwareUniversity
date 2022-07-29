function replaceRepeatChars(letters) {
    let index = 0;
    let filter = "";
    let boolean = true;
    for(let i = 0; i < letters.length; i = index) {
        let firstLetter = letters[i];
        for(let j = i + 1; j <= letters.length; j++) {
            let secondLetter = letters[j];
            if (firstLetter !== secondLetter) {
                index = j;
                boolean = false
                break;
            }
        }
       filter += firstLetter; 
       if (boolean) {
        index++
       }
       boolean = true;
    }
    console.log(filter)
}
replaceRepeatChars('abA')