function timePlus15Minutes (input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursAndMinutes = (hours * 60) + minutes + 15;
    let hoursPlus15Minutes = Math.floor(hoursAndMinutes / 60)
    let minutesPlus15Minutes = (hoursAndMinutes % 60).toFixed(0);
    if (hoursPlus15Minutes === 24) {
        hoursPlus15Minutes = 0;
    }
    if (minutesPlus15Minutes < 10) {
            console.log(`${hoursPlus15Minutes}:0${minutesPlus15Minutes}`)
    } else {
        console.log(`${hoursPlus15Minutes}:${minutesPlus15Minutes}`)
    }
}
timePlus15Minutes (["0", "44"])