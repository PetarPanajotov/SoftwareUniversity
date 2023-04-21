import { POST } from "./api.js";

const section = document.getElementById('form-sign-up');
let ctx = null;
const endPoint = 'users/register'
const form = document.getElementById('register-form');
form.addEventListener('submit', register)

export function registerView(inCtx) {
    ctx = inCtx 
    document.getElementById('container').appendChild(section)
    
}
async function register(e) {
    e.preventDefault()
    debugger;
    const formData = new FormData(form)
    const {email, password, repeatPassword} = Object.fromEntries(formData)
    if (!email) {
        alert('Invalid email')
        form.reset()
        return
    }
    if (password.length < 6) {
        alert('The password should be at least 6 characters long')
        form.reset()
        return
    }
    if (password !== repeatPassword) {
        alert('The repeat password should be equal to the password')
        form.reset()
        return
    }
    const body = {email, password}
    const data = await POST(endPoint, body)
    sessionStorage.setItem('accessToken', data.accessToken)
    sessionStorage.setItem('email', data.email)
    ctx.check()
    ctx.goto('Movies')
}