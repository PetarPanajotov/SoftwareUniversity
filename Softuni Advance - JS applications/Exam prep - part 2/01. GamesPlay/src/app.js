import {page} from './libs.js';
import {render} from './libs.js';
import { getUserData } from './api/util.js';
import { showCatalogue } from './views/catalogueView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { navigation } from './views/nav.js';

const root = document.getElementById('main-content')
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
page('/register', showRegister);
page('/login', showLogin);
page('/catalogue', showCatalogue);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/details/edit/:id', showEdit);
page.start()

