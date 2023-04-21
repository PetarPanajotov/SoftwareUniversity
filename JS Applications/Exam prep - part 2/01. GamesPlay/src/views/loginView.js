import { login } from "../api/user.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="auth">
    <form id="login" @submit = ${submitHandler}>

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>`

export function showLogin(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);
    if(!email || !password) {
        alert('All fields are required!')
        return;
    }
    await login({email, password});
    ctx.page.redirect('/')
}