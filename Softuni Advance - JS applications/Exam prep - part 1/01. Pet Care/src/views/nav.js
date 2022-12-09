import { logout } from '../api/user.js';
import { getUserData } from '../api/util.js';
import { html, render } from '../libs.js'
const header = document.querySelector('header');
const template = (hasUser) => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <!--Only Guest-->
        ${hasUser ?
            html`
        <li><a href="/create">Create Postcard</a></li>
        <li><a href="javascript:void(0)" @click = ${onLogout}>Logout</a></li>
        `
            :
            html`
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <!--Only Users-->
    </ul>`}
</nav>`

export function navigation() {
    render(template(getUserData()), header); 
}
async function onLogout(e) {
    await logout();
    navigation();
}