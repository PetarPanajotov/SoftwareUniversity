import { createView } from "./create.js";
import { dashboardView } from "./dashBoardView.js";
import { guestNavView } from "./guestView.js";
import { homeView } from "./homeView.js";
import { loginView } from "./login.js";
import { uponLogout } from "./logout.js";
import { registerView } from "./register.js";
import { userNavView } from "./userView.js";

const navigationBar = document.getElementsByTagName('nav')[0]
const body = document.getElementsByTagName('body')[0];
navigationBar.addEventListener('click', navigate);
const views = {
    'Register': registerView,
    'Home': homeView,
    'Logout': uponLogout,
    'Login': loginView,
    'Dashboard': dashboardView,
    'Create': createView
}
goto('Home')

function navigate(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const name = e.target.textContent;
        goto(name);
    } else if (e.target.tagName === 'IMG') {
        goto('Home');
    }
}
function goto(viewName) {
    const view = views[viewName];
    if (typeof view === 'function') {
        body.replaceChildren();
        body.appendChild(navigationBar);
        view({
            goto,
            check
        }, body)
    }
}
function check() {
    if (sessionStorage.getItem('accessToken')) {
        userNavView();
    } else {
        guestNavView();
    }
}
check();