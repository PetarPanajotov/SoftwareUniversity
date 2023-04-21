import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDashboard } from "../api/data.js";

const template = (values) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
        ${values.map(element => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${element.img}" />
                        <p>${element.description}</p>
                        <footer>
                            <p>Price: <span>${element.price} $</span></p>
                        </footer>
                        <div>
                            <a href= "/catalog/${element._id}" class="btn btn-info">Details</a>
                        </div>
                    </div>
                </div>
            </div>`)}
        </div>
    </div>`

export async function showCatalog(ctx) {
    const data = await getDashboard()
    const values = Object.values(data);
    ctx.render(template(values));
}