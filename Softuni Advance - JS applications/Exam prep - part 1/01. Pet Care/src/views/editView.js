import { getPetDetails, putPet } from '../api/data.js';
import { html } from '../libs.js';

let ctx = null;
const template = (pet) => html`
<section id="editPage">
    <form class="editForm" @submit = ${submitHandler}>
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value="${pet.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value="${pet.breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value="${pet.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value="${pet.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value="${pet.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`



export async function showEditView(inCtx) {
    ctx = inCtx;
    const data = await getPetDetails(ctx.params.id);
    ctx.render(template(data));
}
async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
        name,
        breed,
        age,
        weight,
        image
    } = Object.fromEntries(formData)
    if(!name || !breed || !age || !weight || !image) {
        alert('All fields are required!');
        return;
    }
    await putPet(ctx.params.id, {name, breed, age, weight, image});
    ctx.page.redirect(`/dashboard/${ctx.params.id}`)
}