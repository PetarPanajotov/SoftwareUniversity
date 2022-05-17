function moving (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let volumeRoom = w*l*h;

    let box = 0;
    let boxCount = 0;
    let enoughOrNot = 0
    let flag = true

    while (command !== "Done") {
        box = Number([command]);
        boxCount += box;
        if (boxCount >= volumeRoom){
            enoughOrNot = Math.abs(volumeRoom - boxCount);
            console.log(`No more free space! You need ${enoughOrNot} Cubic meters more.`)
            flag = false;
            break;
        }
        command = input[index];
        index++   
    }
    if (flag) {
        enoughOrNot = Math.abs(volumeRoom - boxCount);
        console.log (`${enoughOrNot} Cubic meters left.`)
    }
}
moving (["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

