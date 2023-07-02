function repeatString(str, repeat) {
    let repstring = "";
    for (let i = 0; i < repeat; i++) {
        repstring += str;
    }
    return repstring;
}
let repString = repeatString("abc", 3)
console.log(repString)