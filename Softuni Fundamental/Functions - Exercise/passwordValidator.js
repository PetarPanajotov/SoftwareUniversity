function passwordValidator(input) {
    let digitCounter = 0;
    let inputBoolean = true;
    let digitBoolean = true;
    let specialSymbolBoolean = false
    if (input.length < 6 || input.length > 10) {
        console.log("Password must be between 6 and 10 characters")
        inputBoolean = false;
    }
    for (let i = 0; i < input.length; i++) {
        let checker = input.charAt(i);
        let specialSymbolChecker = checker.charCodeAt(0)
        checker = Number(checker);
        if (checker === Number(checker)) {
            digitCounter++;
            continue;
        }
        if (specialSymbolChecker >= 33 && specialSymbolChecker <= 47) {
            specialSymbolBoolean = true
        } else if (specialSymbolChecker >= 58 && specialSymbolChecker <= 64) {
            specialSymbolBoolean = true
        }
    }
    if (specialSymbolBoolean) {
        console.log(`Password must consist only of letters and digits`)

    }
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits")
        digitBoolean = false;
    }
    if (inputBoolean && digitBoolean && !specialSymbolBoolean) {
        console.log("Password is valid")
    }
}
passwordValidator('fdasfs43')