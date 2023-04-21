import { postNewPairs } from '../api/data.js';
import { html } from '../libs.js'

let ctx = null;
const template = () => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form class="create-form" @submit = ${submitHandler}}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(template());
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
    await postNewPairs({brand, model, imageUrl, release, designer, value})
    ctx.page.redirect('/dashboard')
}