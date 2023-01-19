import { getDashboard } from "../api/data.js";
import { html } from "../libs.js";


const template = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
    ${albums.length !== 0? html`
    <ul class="card-wrapper">
       ${albums.map(album => html `
        <li class="card">
            <img src="${album.imageUrl}" alt="travis" />
            <p>
                <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
                <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
        </li>`)}
    </ul>`
    : html `
    <!-- Display an h2 if there are no posts -->
    <h2>There are no albums added yet.</h2>`}
</section>`


export async function showDashboard(ctx) {
    const data = await getDashboard()
    const albums = Object.values(data)
    ctx.render(template(albums))
}