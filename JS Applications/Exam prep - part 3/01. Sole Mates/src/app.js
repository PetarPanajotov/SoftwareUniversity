import { getUserData } from './api/util.js';
import {page} from './libs.js';
import { render } from './libs.js';
import { showCreate } from './views/createView.js';
import { showDashboard } from './views/dashboardView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { navigation } from './views/nav.js';
import { showRegister } from './views/registerView.js';
import { showSearch } from './views/searchView.js';

const root = document.querySelector('main');

function middlewere(ctx, next) {
    ctx.render = (content) => render(content, root);

    const user = getUserData();
    if(user) {
        ctx.user = user;
    };
    next();
    navigation();
}

page(middlewere);
page('/', showHome);
page('index.html', showHome);
page('/dashboard', showDashboard);
page('/create', showCreate)
page('/login', showLogin);
page('/register', showRegister);
page('/search', showSearch);
page('/details/:id', showDetails);
page('/details/edit/:id', showEdit)
page.start()

