import { getDetails, putEditPairs } from '../api/data.js';
import { html } from '../libs.js'

let ctx = null;
const template = (pair) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit = ${submitHandler}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value = "${pair.brand}" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value = "${pair.model}"/>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value = "${pair.imageUrl}" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value = "${pair.release}" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value = "${pair.designer}" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value = "${pair.value}" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`

export async function showEdit(inCtx) {
    ctx = inCtx;
    const data = await getDetails(ctx.params.id);
    ctx.render(template(data));
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
        brand,
        model, 
        imageUrl, 
        release, 
        designer, 
        value
    } = Object.fromEntries(formData);
    if(!brand || !model || !imageUrl || !release || !designer || !value) {
        alert('all fields are required!')
        return
    }
    await putEditPairs(ctx.params.id, {brand, model, imageUrl, release, designer, value});
    ctx.page.redirect(`/details/${ctx.params.id}`)
}