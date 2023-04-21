import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import { getDetails, onDelete } from "../api/data.js"
let ctx = null
const template = (data, userId) => html`
   <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src= "${data.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${data.make}</span></p>
                <p>Model: <span>${data.model}</span></p>
                <p>Year: <span>${data.year}</span></p>
                <p>Description: <span>${data.description}</span></p>
                <p>Price: <span>${data.price} $</span></p>
                <p>Material: <span>${data.material}</span></p>
                ${userId == data._ownerId && userId?
                    html `<div>
                    <a href="/catalog/edit/${data._id}" class="btn btn-info">Edit</a>
                    <a href=”javascript:void(0)” class="btn btn-red" @click = ${deleteFurniture}>Delete</a>
                </div>`
                :
                nothing}
            </div>
        </div>
    </div>`

export async function showDetails(inCtx) {
    ctx = inCtx;
    const data = await getDetails(ctx.params.id);
    ctx.render(template(data, ctx.user?._id));
}

async function deleteFurniture(e) {
    e.preventDefault();
    const checkIfConfirm = confirm('Are you sure that you wan\'t to delete this furniture?')
    if (checkIfConfirm) {
        await onDelete(ctx.params.id);
        ctx.page.redirect('/');
    }
}