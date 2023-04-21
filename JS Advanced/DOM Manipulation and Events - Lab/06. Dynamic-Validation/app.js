function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', function(event) {
        let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        debugger;
        if (input.value.match(pattern) === null) {
            event.target.classList.add('error')
        } else {
            event.target.classList = ""
        }

    })
}