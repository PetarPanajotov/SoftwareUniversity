import { html } from "../../node_modules/lit-html/lit-html.js"
import { onCreate } from "../api/data.js";
// import { invalidClassList, validClassList } from "../api/util.js";

let ctx = null;
const template = () => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitHandler} @change = ${validation}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    </div>`

export function showCreate(inCtx) {
    ctx = inCtx
    ctx.render(template())
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    } = Object.fromEntries(formData);
    if (!make || !model || !year || !description || !price || !img) {
        alert('There are incorrect fields')
        return;
    }
    await onCreate({make, model, year, description, price, img, material});
    ctx.page.redirect('/')
}


// function validation(e) {
//     const currentName  = e.target.name;
//     const currentValue = e.target.value;

//     if(currentName === 'make' || currentName === 'model') {
//         if(currentValue.length < 4) {
//             invalidClassList(e.target);
//         } else {
//             validClassList(e.target);
//         }
//     } else if (currentName === 'year') {
//         if(Number(currentValue) < 1950 || Number(currentValue) > 2050) {
//             invalidClassList(e.target);
//         } else {
//             validClassList(e.target);
//         }
//     } else if (currentName === 'description') {
//         if(currentValue.length < 10) {
//             invalidClassList(e.target);
//         } else {
//             validClassList(e.target);
//         }
//     } else if (currentName === 'price') {
//         if(Number(currentValue) < 0) {
//             invalidClassList(e.target);
//         } else {
//             validClassList(e.target);
//         }
//     } else if (currentName === 'img') {
//         if(!currentValue) {
//             invalidClassList(e.target);
//         } else {
//             validClassList(e.target);
//         }
//     }
// }