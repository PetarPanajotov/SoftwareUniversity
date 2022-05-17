function vowelsSum (input) {
    let word = input[0];
    sum = 0;

    for (i = 0; i < word.length; i++ ) {
    let character = word.charAt (i)
        switch (character) {
            case "a":
                 sum = sum + 1;
                  break;
            case "e":
                sum = sum + 2;
                  break;
            case "i":
                 sum = sum + 3
                 ; break;
            case "o":
                 sum = sum + 4;
                   break;
            case "u":
                 sum = sum + 5;
                   break;
            default: break;
        }
    }
    console.log (sum)
}
vowelsSum (["hi"])