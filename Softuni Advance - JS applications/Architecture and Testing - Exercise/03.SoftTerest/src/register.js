import { POST } from "./api/api.js";

const register = document.getElementsByClassName('container')[2]
const form = document.getElementsByTagName('form')[0]
let ctx = null;
export function registerView(inCtx, body) {
    ctx = inCtx
    body.appendChild(register);
    form.addEventListener('submit', registerUser)
}
async function registerUser(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {email, password, repeatPassword} = Object.fromEntries(formData)
    if (email.length < 3) {
        alert('The email should be at least 3 characters long')
        form.reset()
        return
    }
    if (password.length < 3) {
        alert('The password should be at least 3 characters long')
        form.reset()
        return
    }
    if (password !== repeatPassword) {
        alert('The repeat password should be equal to the password')
        form.reset()
        return
    }
    const body = {email, password}
    const data = await POST('users/register', body)
    sessionStorage.setItem('accessToken', data.accessToken)
    sessionStorage.setItem('email', data.email)
    ctx.check();
    ctx.goto('Home')
}