import { deletePet, getDonation, getIfUserDonated, getPetDetails, postDonation } from '../api/data.js'
import { html, nothing } from '../libs.js'

let ctx = null;
const template = (pet, hasUser, isOwner, donation, alreadyDonated) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donation}$</h4>
                ${hasUser? html`
                <div class="actionBtn"> ${isOwner? html `
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/dashboard/edit/${pet._id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" class="remove" @click = ${onDelete}>Delete</a>`
                        : html`
                        ${!alreadyDonated ? html `<a href="#" class="donate" @click = ${onDonation}>Donate</a>` : nothing}`}
                </div>`: nothing}
            </div>
        </div>
    </div>
</section>`



export async function showDetailsView(inCtx) {
    debugger
    ctx = inCtx;
    const data = await getPetDetails(ctx.params.id);
    const hasUser = ctx.user;
    const isOwner = ctx.user._id == data._ownerId? true: false;
    const donation = await getDonation(ctx.params.id);
    const alreadyDonated = await getIfUserDonated(ctx.params.id, ctx.user._id)

    ctx.render(template(data, hasUser, isOwner, donation* 100, alreadyDonated));
}
async function onDelete() {
    await deletePet(ctx.params.id);
    ctx.page.redirect('/');
}
async function onDonation(e) {
    e.preventDefault();
    const petId = ctx.params.id
    await postDonation({petId: petId});
    ctx.page.redirect(`/dashboard/${ctx.params.id}`)
}