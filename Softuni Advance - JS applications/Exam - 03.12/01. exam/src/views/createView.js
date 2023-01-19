import { postNewAlbum } from "../api/data.js";
import { html } from "../libs.js";

let ctx = null;
const template = () => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit = ${submitHandler}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`

export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
        singer,
        album, 
        imageUrl, 
        release, 
        label, 
        sales
      } = Object.fromEntries(formData)
    if(!singer || !album || !imageUrl || !release || !label || !sales) {
        alert('All fields are required');
        return
    }
    await postNewAlbum({singer, album, imageUrl, release, label, sales})
    ctx.page.redirect('/dashboard')
}