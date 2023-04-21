import { register } from "../api/user.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit = ${submitHandler}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
`

export function showRegister(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, ['re-password']: repeatpass } = Object.fromEntries(formData);
    if (!email || !password || !repeatpass) {
        alert('All fields are required!')
        return;
    }
    if (password !== repeatpass) {
        alert('Password doesn\'t match');
        e.target.reset()
        return;
    }
    await register({ email, password });
    ctx.page.redirect('/dashboard')
}