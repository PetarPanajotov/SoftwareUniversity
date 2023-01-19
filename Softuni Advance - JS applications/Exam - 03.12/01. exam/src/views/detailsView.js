
import { delAlbum, getAlreadyLiked, getDetails, getLikes, postLike } from "../api/data.js";
import { html, nothing } from "../libs.js";

let ctx = null;
const template = (album, isOwner, hasUser, likes, checkIfLiked) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${!isOwner? html` ${hasUser && !checkIfLiked? html `
            <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>`:nothing}`
            : html`

            <a href="/details/edit/${album._id}" id="edit-btn">Edit</a>

            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`}
        </div>
    </div>
</section>
`

export async function showDetails(inCtx) {
    ctx = inCtx;
    const data = await getDetails(ctx.params.id);
    let likes = await getLikes(ctx.params.id);
    const alreadyLiked = await getAlreadyLiked(ctx.params.id, ctx.user._id)
    const checkIfLiked = alreadyLiked === 1? true:false;
    console.log(likes);
    const isOwner = ctx.user?._id === data._ownerId
    const hasUser = ctx.user
    ctx.render(template(data, isOwner, hasUser, likes, checkIfLiked))
}
async function onDelete(e) {
    e.preventDefault()
    if (confirm('Are you sure you want to delete this album')) {
        await delAlbum(ctx.params.id)
    }
}
async function onLike(e) {
    await postLike({albumId: ctx.params.id})
    ctx.page.redirect(`/details/${ctx.params.id}`)
}