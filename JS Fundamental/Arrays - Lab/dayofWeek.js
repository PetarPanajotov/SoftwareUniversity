function dayofWeek (day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let currentDay = ""
    if(day <= 7) {
        currentDay = days[day - 1]
        console.log(currentDay)
    } else {
        console.log("Invalid day!")
    }
}
dayofWeek(7)