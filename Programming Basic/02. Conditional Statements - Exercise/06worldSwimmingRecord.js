function worldSwimmingRecord (input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
    let timeNeeded = distance * timePerMeter;
    distance = Math.floor(distance / 15);
    let slowing = distance * 12.5;
    timeNeeded = timeNeeded + slowing;
    if (timeNeeded < record) {
        console.log (`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`);
    } else {
        let difference = Math.abs(timeNeeded - record);
        console.log (`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord (["55555.67",
"3017",
"5.03"])

