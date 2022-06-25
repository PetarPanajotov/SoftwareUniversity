function train(commands) {
    let wagons = commands
                        .shift()
                        .split(" ")
                        .map(Number);
    let capacity = Number(commands.shift())
    let copyCommands = commands.slice()
    for (let i = 0; i < copyCommands.length; i++) {
        let currentCommand = commands
                                .shift()
                                .split(" ")
        if (currentCommand.length === 2) {
            let num = Number(currentCommand[1])
            wagons.push(num);     
        } else {
            currentCommand = Number(currentCommand)
            for(let j = 0; j < wagons.length; j++) {
                if(wagons[j] < capacity) {
                    let modifyArr = wagons[j];
                    modifyArr = modifyArr + currentCommand;
                    if(modifyArr <= capacity) {
                        wagons.splice(j, 1, modifyArr);
                        break;
                    }
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])