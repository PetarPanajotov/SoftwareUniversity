import { DELETE, GET } from "./api/api.js";
const details = document.getElementsByClassName('container home some')[0];
const body = document.getElementsByTagName('body')[0]


export async function showDetails(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault()
        debugger;
        details.innerHTML = ''
        const _id = e.target.id;
        const data = await GET(`data/ideas/${_id}`)
        const ownerId = data._ownerId;
        const title = data.title;
        const description = data.description;
        const img = data.img;
        const div = document.createElement('div')
        div.innerHTML = `
        <img class="det-img" src="${img}" />
        <div class="desc">
            <h2 class="display-5">${title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${description}</p>
        </div>
        `
        if (sessionStorage.getItem('id') === ownerId) {
            div.innerHTML +=
            `<div class="text-center">
                <a class="btn detb" id = ${_id} href="">Delete</a>
            </div>`
            div.getElementsByTagName('a')[0].addEventListener('click', deleteIdea)
        }
        details.appendChild(div)
        body.replaceChild(details, e.target.parentElement.parentElement.parentElement)
    }
}
export async function deleteIdea(e) {
    debugger
    e.preventDefault();
    const id = e.target.id;
    const token = sessionStorage.getItem('accessToken');
    const data = await DELETE(`data/ideas/${id}`, '', token);
}
