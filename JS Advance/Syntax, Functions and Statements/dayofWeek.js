function dayofWeek (day) {
    let daysObj = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    }
    if(daysObj.hasOwnProperty(day)) {
        console.log(daysObj[day])
    } else {
        console.log("error")
    }
}
dayofWeek('Invalid')