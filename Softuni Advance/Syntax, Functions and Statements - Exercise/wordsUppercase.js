// Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".

// The input comes as a single string argument - the text to extract and convert words from.

// The output should be a single line containing the converted string.
function wordsUppercase(sentence) {
    sentence = sentence.toUpperCase()
    let pattern = /\w+/gm
    sentence = sentence.match(pattern).join(', ')
    console.log(sentence)
}
wordsUppercase('hello')