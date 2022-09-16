//Write a function that calculates how long it takes a student to get to university. The function takes three numbers:

// · The first is the number of steps the student takes from their home to the university

// · Тhe second number is the length of the student's footprint in meters

// · Тhe third number is the student speed in km/h

// Every 500 meters the student rests and takes a 1-minute break.

// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.

// The input comes as three numbers.

// The output should be printed on the console.
function timeToWalks(steps, meters, kmHours) {
    let metersInSecond = kmHours / 3.6;
    let metersToWalk = steps * meters;
    let breakTime = (Math.floor(metersToWalk / 500))*60;
    
    let timeWithoutBreak = metersToWalk / metersInSecond;
    let timeWIthBreak =  Math.ceil(timeWithoutBreak + breakTime);

    let minutes = Math.floor(timeWIthBreak/3600 * 60);
    let hours = Math.floor(timeWithoutBreak / 3600);
    let seconds = timeWIthBreak % 60;

    minutes = (minutes > 60) ? minutes:minutes % 60;
    hours = (hours < 10) ? "0" + hours:hours;
    minutes = (minutes < 10) ? "0" + minutes:minutes;
    seconds = (seconds < 10) ? "0" + seconds:seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalks(3534, 0.70, 5.5);
