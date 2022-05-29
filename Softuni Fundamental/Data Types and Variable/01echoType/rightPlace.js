function rightPlace(string1, char, string2) {
    let res = string1.replace('_', char)
    let output = res === string2? "Matched" : "Not Matched";
    console.log (output)  
}
rightPlace('Str_ng', 'i',

'String')