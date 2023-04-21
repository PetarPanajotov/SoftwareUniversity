import { login } from '../api/user.js';
import { html } from '../libs.js';
let ctx = null;
const template = () => html`
<section id="loginPage">
    <form class="loginForm" @submit = ${submitHandler}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`



export async function showLoginView(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const {email, password} = data;
    if(!email || !password) {
        alert('All fields are required')
        e.target.reset();
        return
    }
    await login({email, password});
    ctx.navigation()
    ctx.page.redirect('/');
}