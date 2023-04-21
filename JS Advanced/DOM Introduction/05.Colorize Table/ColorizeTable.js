// Write a JS function that changes the color of all even rows when the user clicks a button. Apply the color "Teal" to the target rows.
function colorize() {
    let index = 0
    let table = document.querySelectorAll('table tr')
    for (let row of table) {
        index++
        if(index % 2 == 0) {
            row.style.background = 'teal'
        }
    }
    debugger;
}