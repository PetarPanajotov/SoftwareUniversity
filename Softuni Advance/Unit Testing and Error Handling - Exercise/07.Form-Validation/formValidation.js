function validate() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let email = document.getElementById('email')
    let company = document.getElementById('company');
    let submitBtn = document.getElementById('submit');
    let div = document.getElementById('valid')
    let companyInfo = document.getElementById('companyInfo')
    let companyNumber = document.getElementById('companyNumber')
    let boolean = false;
    company.addEventListener('change', function () {
        if (company.checked === true) {
            companyInfo.style.display = "block"
            boolean = true
        } else {
            companyInfo.style.display = "none"
            boolean = false
        }
    })

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/g
    let passwordPattern = /^[A-Za-z0-9_]{3,15}$/g
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/g;

    submitBtn.addEventListener('click', check)

    function check(e) {
        let correctCounter = 0;
        e.preventDefault()
        if (username.value.match(usernamePattern) === null) {
            username.style.borderColor = "red"
        } else {
            username.style.border = ""
            correctCounter++
        }
        if (password.value.match(passwordPattern) === null) {
            password.style.borderColor = "red"
            confirmPassword.style.borderColor = "red"
        } else {
            password.style.borderColor = ""
            correctCounter++
        }
        if (confirmPassword.value !== password.value) {
            password.style.borderColor = "red"
            confirmPassword.style.borderColor = "red"
        } else {
            correctCounter++
        }
        if (email.value.match(emailPattern) === null) {
            email.style.borderColor = "red"
        } else {
            email.style.borderColor = ""
            correctCounter++
        }
        if (boolean) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red"
                correctCounter--
                debugger;
            } else {
                companyNumber.style.borderColor = ""
            }
        }
        if (correctCounter === 4) {
            div.style.display = "block"
        } else {
            div.style.display = "none"
        }
    }
}
