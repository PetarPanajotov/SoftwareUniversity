import { POST } from "./api/api.js";

const create = document.getElementsByClassName('container')[5]
const form = create.getElementsByTagName('form')[0];
export function createView(ctx, body) {
    body.appendChild(create);
    form.addEventListener('submit', createNewIdea)
}
async function createNewIdea(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {title, description, imageURL } = Object.fromEntries(formData);
    if(title.length < 6 || description.length < 10 || imageURL.length < 5) {
        alert('The title should be at least 6 characters long. ' +
         'The description should be at least 10 characters long. ' +
         'The image should be at least 5 characters long')
         form.reset()
         return;
    }
    const body = {
        title,
        description,
        'img': imageURL
    }
    const token = sessionStorage.getItem('accessToken');
    await POST('data/ideas', body, token)
    form.reset()
}