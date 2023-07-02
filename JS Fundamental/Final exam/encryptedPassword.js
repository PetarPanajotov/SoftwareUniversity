function encryptedPassword(input) {
    let pattern = /(.+)>(?<first>\d+)\|(?<second>[a-z]+)\|(?<third>[A-Z]+)\|(?<forth>.+[^<>])<\1/gm
    let passwordToCheck = input.shift();
    for(let i = 0; i < passwordToCheck; i++) {
        let isPasswordValid = input.shift();
        isPasswordValid = isPasswordValid.match(pattern);
        if (isPasswordValid !== null) {
            isPasswordValid = pattern.exec(isPasswordValid)
            let firstGroup = isPasswordValid.groups[`first`]
            let secondGroup = isPasswordValid.groups[`second`]
            let thirdGroup = isPasswordValid.groups[`third`]
            let forthGroup = isPasswordValid.groups[`forth`]
            let password = firstGroup+secondGroup+thirdGroup+forthGroup
            console.log(`Password: ${password}`)
        } else {
            console.log(`Try another password!`)
        }
    }
}
encryptedPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])