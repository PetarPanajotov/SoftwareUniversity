function arrayManipulations (commands) {
    let arrayConvert = commands.shift()
                            .split(" ")
                            .map(Number);       
    for (let i = 0; i < commands.length; i ++) {
        let currentCommand = commands[i]
                            .split(" ")
        let operation = currentCommand.shift()
        let num1 = Number(currentCommand[0])
        let num2 = Number(currentCommand[1])
        switch(operation) {
            case "Add": arrayConvert.push(num1); break; 
            case "Remove": arrayConvert = arrayConvert.filter(el => el !== num1); break;
            case "RemoveAt": arrayConvert.splice(num1, 1); break;
            case "Insert": arrayConvert.splice(num2, 0, num1); break; 
        }
    }
    console.log(arrayConvert.join(" "))
}
arrayManipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])