import { getUserData } from './api/util.js';
import {page} from './libs.js';
import {render} from './libs.js';
import { showCreate } from './views/createView.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { navigation } from './views/nav.js';
import { showRegister } from './views/registerView.js';


const root = document.querySelector('main')
function middleware(ctx, next) {
    ctx.render = (content) => render(content, root);
    const user = getUserData()
    if (user) {
        ctx.user = user
    }
    navigation();
    next()
}

page(middleware);
page('/', showHome);
page('/index.html', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/dashboard', showDashboard);
page('/details/:id', showDetails);
page('/details/edit/:id', showEdit);
page.start()