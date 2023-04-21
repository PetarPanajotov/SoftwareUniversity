// Write a function that finds the elements at even positions in an array.

// The input comes as an array of string elements.

// The output is printed on the console. Collect all elements in a string, separated by space
function evenPositionElement(arr) {
    let evenPosition = [];
    for (let i = 0; i < arr.length; i+=2) {
        evenPosition.push(arr[i]);
    }
    console.log(evenPosition.join(' '));
}
evenPositionElement(['20', '30', '40',

'50', '60']);