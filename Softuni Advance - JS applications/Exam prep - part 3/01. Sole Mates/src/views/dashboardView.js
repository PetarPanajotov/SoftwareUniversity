
import { getDashboard } from '../api/data.js';
import { html } from '../libs.js'

const template = (pairs) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        ${pairs.length > 0? html`${pairs.map(pair => html`
        <li class="card">
            <img src="${pair.imageUrl}" alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${pair.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${pair.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${pair.value}</span>$</p>
            <a class="details-btn" href="/details/${pair._id}">Details</a>
        </li>`)}`
        : html `
        <h2>There are no items added yet.</h2>
        `}
</section>`

export async function showDashboard(ctx) {
    const data = await getDashboard();
    const values = Object.values(data);
    ctx.render(template(values));
}