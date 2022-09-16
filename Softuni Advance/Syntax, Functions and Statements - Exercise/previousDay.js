// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`.
function previousDay(year, day, month) {
let date = new Date(year, day-1, month-1);

return (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
let test = previousDay(2016, 9, 30);
console.log(test);