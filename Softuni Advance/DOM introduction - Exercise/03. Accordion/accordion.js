function toggle() {
    let textToShow = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];
    let buttonText = button.textContent;
    if (buttonText == "More") {
        textToShow.style.display = "block"
        button.textContent = 'Less'
    } else if (buttonText == "Less") {
        textToShow.style.display = "none"
        button.textContent = 'More'
    }
}