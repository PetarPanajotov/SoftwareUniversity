import { addMovieView } from "./addMovie.js";
import { editView } from "./editMovie.js";
import { guestNavView} from "./guest.js";
import { homeView } from "./home.js";
import { loginView } from "./login.js";
import { registerView } from "./register.js";
import { userNavView } from "./user.js";
const navigation = document.getElementsByTagName('nav')[0]
window.addEventListener('load', check)
navigation.addEventListener('click', navigate)
const views = {
    'Movies': homeView,
    'Login': loginView,
    'Register': registerView
}
goto('Movies')

function navigate(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const name = e.target.textContent
        goto(name)
    }
}
function goto(viewName) {
    const view = views[viewName];
    if(typeof view === 'function') {
        document.getElementById('container').replaceChildren()
        document.getElementById('container').appendChild(navigation)
        view({
            goto,
            check
        })
    }
}
function check() {
    if (sessionStorage.getItem('accessToken')) {
        userNavView();
    } else {
        guestNavView();
    }
}
