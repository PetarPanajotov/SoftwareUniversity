import { getSearch } from '../api/data.js';
import { html, nothing } from '../libs.js'

let ctx = null;
const template = (renderSecond) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${submitHandler}>
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    ${renderSecond}
</section>`
const resultTemplate = (pairs, user) => html`
<div id="search-container">
${pairs.length > 0? html `
    <ul class="card-wrapper">
        ${pairs.map(pair => html`
        <!-- Display a li with information about every post (if any)-->
        <li class="card">
            <img src="${pair.imageUrl}" alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${pair.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${pair.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${pair.value}</span>$</p>
            ${user? html `<a class="details-btn" href="/details/${pair._id}">Details</a>`: nothing}
        </li>`)}
    </ul>`
        : html `<h2>There are no results found.</h2>`}
    <!-- Display an h2 if there are no posts -->
    <!-- <h2>There are no results found.</h2> -->
</div>`

export function showSearch(inCtx) {
    ctx = inCtx;
    ctx.render(template());
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const {search} = Object.fromEntries(formData);
    if(!search) {
        alert('all fields are required');
        return
    }
    const user = ctx.user;
    const data = await getSearch(search);
    const values = Object.values(data);
    ctx.render(template(resultTemplate(values, user)))
}