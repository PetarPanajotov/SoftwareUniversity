const navigationBar = document.querySelectorAll('.container ul li a')
export function userNavView() {
    [...navigationBar].forEach(el => {
        if(el.textContent === "Login" || el.textContent === 'Register') {
            el.style.display = 'none'
        } else {
            el.style.display = 'block'
        }
    })
}