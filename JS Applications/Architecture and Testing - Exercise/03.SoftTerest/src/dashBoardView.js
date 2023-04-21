import { GET } from "./api/api.js";
import { showDetails } from "./showDetails.js";

const dashboard = document.getElementById('dashboard-holder')
let ctx = null;
export function dashboardView(inCtx, body) {
    ctx = inCtx
    body.appendChild(dashboard);
    loadCards()
}
async function loadCards() {
    const data = await GET('data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
    dashboard.innerHTML = ''
    if (!data) {
        dashboard.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>'
    } else {
        Object.values(data).forEach(value => {
            const id = value._id;
            const title = value.title;
            const img = value.img;
            const div = document.createElement('div')
            div.innerHTML = `
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${title}!</p>
            </div>
            <img class="card-image" src="${img}" alt="Card image cap">
            <a class="btn" id = ${id} href="">Details</a>
        </div>`
            dashboard.appendChild(div)
        })
    }
    dashboard.addEventListener('click', showDetails)
}