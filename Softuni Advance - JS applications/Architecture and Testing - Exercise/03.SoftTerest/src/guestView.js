const navigationBar = document.querySelectorAll('.container ul li a')
export function guestNavView() {
    [...navigationBar].forEach(el => {
        if(el.textContent === "Create" || el.textContent === "Logout") {
            el.style.display = 'none'
        } else {
            el.style.display = 'block'
        }
    })
}