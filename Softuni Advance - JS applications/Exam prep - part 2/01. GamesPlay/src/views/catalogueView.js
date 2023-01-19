import { getAllGames } from "../api/data.js";
import { html } from "../libs.js";

const template = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${games.length > 0? html`
    <!-- Display div: with information about every game (if any) -->
    ${games.map(game => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src="${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>`)}`
    : html `<h3 class="no-articles">No articles yet</h3>`}
</section>`

export async function showCatalogue(ctx) {
    const data = await getAllGames();
    const values = Object.values(data);
    ctx.render(template(values))
}