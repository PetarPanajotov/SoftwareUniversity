function lunchBreak (input) {
    let name = input[0];
    let duration = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime * (1 / 8);
    let timeForRest = breakTime * (1 / 4);

    let remainingTime = breakTime - (timeForLunch + timeForRest);

    let freeTimeLeft = Math.abs(remainingTime - duration);

    if (remainingTime >= duration) {
        console.log (`You have enough time to watch ${name} and left with ${Math.ceil(freeTimeLeft)} minutes free time.`);
    } else {
        console.log (`You don't have enough time to watch ${name}, you need ${Math.ceil(freeTimeLeft)} more minutes.`)
    }
}
lunchBreak (["Game of Thrones",
"60",
"96"])


