import { getDashBoardPets } from '../api/data.js';
import { html } from '../libs.js'

const template = (data) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${data.length > 0? html` ${data.map(pet => html `
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="${pet.img}">
            </article>
            <h2 class="name">${pet.name}</h2>
            <h3 class="breed">${pet.breed}</h3>
            <div class="action">
                <a class="btn" href="/dashboard/${pet._id}">Details</a>
            </div>
        </div>
        `)}` 
        :
        html `
        <!--If there is no pets in dashboard-->
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>
    </div>`}
</section>`



export async function showDashboardView(ctx) {
    const data = await getDashBoardPets();
    const values = Object.values(data);
    ctx.render(template(values));
}