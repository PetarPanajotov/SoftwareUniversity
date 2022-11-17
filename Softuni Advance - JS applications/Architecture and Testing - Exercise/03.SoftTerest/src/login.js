import { POST } from "./api/api.js";

const login = document.getElementsByClassName('container')[3]
const form = login.getElementsByTagName('form')[0]
let ctx = null;

export async function loginView(inCtx, body) {
    ctx = inCtx
    body.appendChild(login);
    form.addEventListener('submit', loginUser)
}
async function loginUser(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {email, password} = Object.fromEntries(formData)
    const body = {email, password}
    const data = await POST('users/login', body)
    sessionStorage.setItem('accessToken', data.accessToken)
    sessionStorage.setItem('email', data.email)
    sessionStorage.setItem('id', data._id)
    ctx.check();
    ctx.goto('Home')
}