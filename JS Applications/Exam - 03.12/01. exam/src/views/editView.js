import { getDetails, putEditAlbum } from "../api/data.js";
import { html } from "../libs.js";

let ctx = null;
const template = (album) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit = ${submitHandler}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value = "${album.singer}"/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value = "${album.album}" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value = "${album.imageUrl}" />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value = "${album.release}" />
            <input type="text" name="label" id="album-label" placeholder="Label" .value = "${album.label}" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value = "${album.sales}" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`

export async function showEdit(inCtx) {
    ctx = inCtx;
    const album = await getDetails(ctx.params.id);
    ctx.render(template(album))
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
    await putEditAlbum(ctx.params.id, {singer, album, imageUrl, release, label, sales})
    ctx.page.redirect(`/details/${ctx.params.id}`)
}