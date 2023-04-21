import { delGame, getDetails } from "../api/data.js";
import { html, nothing } from "../libs.js";

let ctx = null;
const template = (game, isOwner) => html`
<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                <li class="comment">
                    <p>Content: I rate this one quite highly.</p>
                </li>
                <li class="comment">
                    <p>Content: The best game.</p>
                </li>
            </ul>
            <!-- Display paragraph: If there are no games in the database -->
            <p class="no-comment">No comments.</p>
        </div>
        ${isOwner? html`
        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        <div class="buttons">
            <a href="/details/edit/${game._id}" class="button">Edit</a>
            <a href="/" class="button" @click = ${deleteHandler}>Delete</a>
        </div>` : nothing}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>

</section>`

export async function showDetails(inCtx) {
    ctx = inCtx;
    const data = await getDetails(ctx.params.id);
    const userId = ctx.user?._id;
    const gameOwnerId = data._ownerId;
    const isOwner = userId == gameOwnerId;
    ctx.render(template(data, isOwner));
}
async function deleteHandler(e) {
    await delGame(ctx.params.id)
}