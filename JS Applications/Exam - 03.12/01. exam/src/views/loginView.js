import { login } from "../api/user.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit = ${submitHandler}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`

export function showLogin(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
        alert('All fields are required!')
        return;
    }
    await login({ email, password });
    ctx.page.redirect('/dashboard')
}