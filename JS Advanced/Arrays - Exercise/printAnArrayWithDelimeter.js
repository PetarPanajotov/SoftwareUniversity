// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.

// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.
function printAnArrayWithDelimeter (arr,delimeter ) {
    console.log(arr.join(delimeter));
}
printAnArrayWithDelimeter(['One',

'Two',

'Three',

'Four',

'Five'],

'-');