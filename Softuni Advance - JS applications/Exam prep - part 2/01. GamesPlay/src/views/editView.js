import { getDetails, putEditGame } from "../api/data.js";
import { html } from "../libs.js";

let ctx = null;
const template = (game) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="auth">
    <form id="edit"  @submit = ${submitHandler}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value="${game.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value="${game.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${game.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value="${game.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${game.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">
        </div>
    </form>
</section>`

export async function showEdit(inCtx) {
    ctx = inCtx;
    const data = await getDetails(ctx.params.id);
    ctx.render(template(data))
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
        title,
        category,
        maxLevel,
        imageUrl,
        summary
    } = Object.fromEntries(formData);
    if(!title || !category || !maxLevel || !imageUrl || !summary) {
        alert('all fields are required!');
        return
    }
    await putEditGame(ctx.params.id, {title, category, maxLevel, imageUrl, summary});
    debugger;
    ctx.page.redirect(`/details/${ctx.params.id}`)
}