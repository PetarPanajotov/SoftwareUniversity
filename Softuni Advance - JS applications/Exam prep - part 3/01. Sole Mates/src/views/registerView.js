import { register } from "../api/user.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form" @submit = ${submitHandler}>
        <h2>Register</h2>
        <form class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`

export function showRegister(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, ['re-password']: repassword } = Object.fromEntries(formData);
    if (!email || !password || !repassword) {
        alert('All fields are required!')
        return;
    }
    if (password !== repassword) {
        alert('Password doesn\'t match');
        e.target.reset()
        return;
    }
    await register({ email, password });
    ctx.page.redirect('/dashboard')
}