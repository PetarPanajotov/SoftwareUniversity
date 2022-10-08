function focused() {
    let elements = document.getElementsByTagName('input')
    for (let el of elements) {
        el.addEventListener('focus', function (event) {
            event.target.parentElement.classList.add('focused')
            debugger;
        })
        el.addEventListener('blur', function (event) {
            event.target.parentElement.className = ""
        })
    }
}