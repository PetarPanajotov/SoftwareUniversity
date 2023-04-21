function lockedProfile() {
    let showMoreButtons = document.getElementsByTagName('button')
    debugger;
    for (let button of showMoreButtons) {
        button.addEventListener('click', function showmore() {
            debugger;
            let checkbox = button.parentElement.querySelectorAll('input[type = radio]')
            for (let check of checkbox) {
                if (check.checked && check.value === 'unlock') {
                    let information = check.parentElement.querySelector('div')
                    if (information.style.display === "block") {
                        information.style.display = "none"
                        button.innerText = "Show More"
                    } else {
                        information.style.display = "block"
                        button.innerText = "Hide it"
                    }
                }
            }
        })
    }
}


