import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { showCreate } from './views/createView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showMyFurniture } from './views/myFurnitureView.js';
import { navigation } from './views/nav.js';
import { showCatalog } from './views/catalogView.js';
import { showDetails } from './views/detailsView.js';
import { getUserData } from './api/util.js';
import { showEdit } from './views/editView.js';
const root = document.querySelector('body');
function middleware(ctx, next) {
    ctx.render = (content) => render(content, root)
    // ctx.navigation = navigation();
    const user = getUserData()
    if(user) {
        ctx.user = user
    }
    navigation();
    next();
}

page(middleware)
page('/', showCatalog);
page('/index.html', showCatalog);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails)
page('/catalog/edit/:id', showEdit)
page('/create', showCreate);
page('/myfurniture', showMyFurniture)
page('/login', showLogin);
page('/register',showRegister)
page.start()