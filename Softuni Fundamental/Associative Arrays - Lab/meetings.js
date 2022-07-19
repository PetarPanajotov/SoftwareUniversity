function meetings(arr) {
    let meetingDays = {};
    for(let index of arr) {
        let [day, name] = index.split(" ")
        if (meetingDays.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
        meetingDays[day] = name
        console.log(`Scheduled for ${day}`)
        }
    }
    for(let key in meetingDays) {
        console.log(key, "->", meetingDays[key])
   }
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])