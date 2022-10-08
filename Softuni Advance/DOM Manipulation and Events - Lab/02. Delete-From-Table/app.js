function deleteByEmail() {
    let list = Array.from(document.querySelectorAll('tbody tr'))
    let input = document.querySelector('label input').value
    for (let el of list) {
        if (el.textContent.includes(input)) {
            document.getElementById('result').textContent = "Deleted."
            el.remove();
        } else {
            document.getElementById('result').textContent = "Not found."
        }
    }
}