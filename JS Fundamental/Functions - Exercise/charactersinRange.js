function charactersinRange(first, second) {
    let startCharacter = Math.min(first.charCodeAt(0), second.charCodeAt(0));
    let endCharacter = Math.max(first.charCodeAt(0), second.charCodeAt(0));
    let inRange = [];
    for (let current = startCharacter + 1; current < endCharacter; current++) {
        let character = String.fromCharCode(current);
        inRange.push(character)
    }
    console.log(inRange.join(" "))
}
charactersinRange('a',
'd'
)