// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove".

// The initial number is 1. Each input command should increase that number, regardless of what it is. Upon receiving an "add" command you should add the current number to your array. Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.

// The input comes as an array of strings. Each element holds a command.

// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".
function addRemoveElement(commands) {
    let result = [];
    let num = 0;
    let commandObj = {
        'add': a => {
            result.push(a + 1);
            return num = a + 1;
        },
        'remove': a => {
            result.pop();
            return num = a + 1;
        }
    }
    for (index of commands) {
        commandObj[index](num);
    }
    (result.length === 0) ? console.log('Empty') : console.log(result.join('\n'));
}
addRemoveElement(['remove', 'remove', 'remove']);

