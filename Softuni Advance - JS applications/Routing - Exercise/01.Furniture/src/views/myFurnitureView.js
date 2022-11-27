import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
// import { repeat } from "../../node_modules/lit-html/directives/repeat.js"
import { getMyPublicatons } from "../api/data.js"

const template = (data) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.length > 0 ? html`
            ${data.map(element => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${element.img}" />
                        <p>${element.description}</p>
                        <footer>
                            <p>Price: <span>${element.price} $</span></p>
                        </footer>
                        <div>
                            <a href="/catalog/${element._id}" class="btn btn-info">Details</a>
                        </div>
                    </div>
                </div>
            </div>`)}`
        : nothing}
        </div>
    </div>`

export async function showMyFurniture(ctx) {
    let data = await getMyPublicatons(ctx.user._id);
    ctx.render(template(Object.values(data)));
}