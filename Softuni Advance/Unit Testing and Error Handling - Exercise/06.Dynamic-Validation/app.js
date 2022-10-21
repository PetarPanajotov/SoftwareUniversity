function validate() {
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
    let email = document.getElementById('email');
    email.addEventListener('change', function(e) {
        let current = e.currentTarget.value
        if(current.match(pattern) === null) {
            e.currentTarget.classList = "error"
        } else {
            e.currentTarget.classList.remove("error")
        }
    })
}