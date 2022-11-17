import { POST } from "./api.js";

const section = document.getElementById('form-login');
const form = document.getElementById('login-form')
form.addEventListener('submit', login)
const endPoint = 'users/login'
let ctx = null;
export function loginView(inCtx) {
    ctx = inCtx
    document.getElementById('container').appendChild(section)
}
async function login(e) {
    e.preventDefault()
    debugger;
    const formData = new FormData(form)
    const {email, password} = Object.fromEntries(formData)
    const body = {email, password}
    const data = await POST(endPoint, body)
    sessionStorage.setItem('accessToken', data.accessToken)
    sessionStorage.setItem('email', data.email)
    ctx.check()
    ctx.goto('Movies')
}