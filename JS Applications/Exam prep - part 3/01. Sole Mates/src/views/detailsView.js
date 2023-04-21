import { delPairs, getDetails } from '../api/data.js';
import { html, nothing } from '../libs.js'

let ctx = null;
const template = (pair, isOwner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${pair.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${pair.brand}</span></p>
            <p>
                Model: <span id="details-model">${pair.model}</span>
            </p>
            <p>Release date: <span id="details-release">${pair.release}</span></p>
            <p>Designer: <span id="details-designer">${pair.designer}</span></p>
            <p>Value: <span id="details-value">${pair.value}</span></p>
        </div>
        ${isOwner? html` 
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="/details/edit/${pair._id}" id="edit-btn">Edit</a>
            <a href="" id="delete-btn" @click = ${onDelete}>Delete</a>
        </div>`: nothing}
    </div>
</section>`

export async function showDetails(inCtx) {
    ctx = inCtx;
    const pairId = ctx.params.id;
    const data = await getDetails(pairId);
    const isOwner = ctx.user._id == data._ownerId;
    ctx.render(template(data, isOwner));
}
async function onDelete(e) {
    e.preventDefault()
    if(confirm('are you sure you want to delete this item?')) {
    await delPairs(ctx.params.id);
    }
}
