import { html } from "../../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js";

let ctx = null;
const template = () => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${submitHandler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>`

export function showRegister(inCtx) {
    ctx = inCtx
    ctx.render(template())
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, rePass } = Object.fromEntries(formData);
    if(!email || !password || !rePass) {
        alert('All fields are required');
        return;
    }
    if(password !== rePass) {
        alert('Password doesn\'t match. Please try again')
        return;
    }
    await register({email, password});
    ctx.page.redirect('/')
}