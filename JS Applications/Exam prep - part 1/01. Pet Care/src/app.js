import { render } from "./libs.js";
import { page } from './libs.js';
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { navigation } from "./views/nav.js";
import { getUserData } from "./api/util.js";

const root = document.querySelector('main');

function middleware(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.navigation = () => navigation();
    const user = getUserData();
    if(user) {
        ctx.user = user;
    }
    next();
}

navigation();
page(middleware);
page('/', showHomeView);
page('/index.html', showHomeView);
page('/dashboard', showDashboardView);
page('/dashboard/:id', showDetailsView);
page('/dashboard/edit/:id', showEditView);
page('/create', showCreateView);
page('/login', showLoginView);
page('/register',showRegisterView);
page.start();