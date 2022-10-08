function area () {
    return Math.abs(this.x * this.y)
}
function vol() {
    return Math.abs(this.x * this.y * this.z)
}
function solve(area, vol, input) {
    input = JSON.parse(input)
    let result = []

    for (let entry of input) {
        let calcArea = area.call(entry);
        let calcVolume = vol.call(entry);

        result.push({
            area: calcArea,
            volume: calcVolume
        })
    }
    return result
}
solve(area, vol, `[

    {"x":"10","y":"-22","z":"10"},
    
    {"x":"47","y":"7","z":"-5"},
    
    {"x":"55","y":"8","z":"0"},
    
    {"x":"100","y":"100","z":"100"},
    
    {"x":"55","y":"80","z":"250"}
    
    ]`)