import { postNewGame } from "../api/data.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<!-- Create Page ( Only for logged-in users ) -->
<section id="create-page" class="auth">
    <form id="create" @submit = ${submitHandler}>
        <div class="container">
            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`

export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(template());
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const
    {   title,
        category,
        maxLevel,
        imageUrl,
        summary
    } = Object.fromEntries(formData);

    if (!title || !category || !maxLevel || !imageUrl || !summary) {
        alert('all fields are required!');
        return
    }
    await postNewGame({title, category, maxLevel, imageUrl, summary});
    ctx.page.redirect('/')
}