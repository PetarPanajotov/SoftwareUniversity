import { register } from '../api/user.js';
import { html } from '../libs.js';
let ctx = null;
const template = () => html`
<section id="registerPage">
    <form class="registerForm" @submit = ${submitHandler}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`



export async function showRegisterView(inCtx) {
    ctx = inCtx;
    ctx.render(template());
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const {email, password, repeatPassword} = data;
    if(!email || !password || !repeatPassword) {
        alert('All fields are required')
        e.target.reset();
        return
    }
    if(password != repeatPassword) {
        alert('Password doesn\'t match. Please try again!');
        e.target.reset();
        return
    }
    await register({email, password});
    ctx.navigation()
    ctx.page.redirect('/');
}