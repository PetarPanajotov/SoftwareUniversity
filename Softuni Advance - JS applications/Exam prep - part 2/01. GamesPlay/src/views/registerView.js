import { register } from "../api/user.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="content auth">
    <form id="register" @submit = ${submitHandler}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>`

export function showRegister(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password, ['confirm-password']: confirmpass} = Object.fromEntries(formData);
    if(!email || !password || !confirmpass) {
        alert('All fields are required!')
        return;
    }
    if(password !== confirmpass) {
        alert('Password doesn\'t match');
        e.target.reset()
        return;
    }
    await register({email, password});
    ctx.page.redirect('/')
}