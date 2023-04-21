import { POST, GET } from "./api.js";
import { createElements } from "./ultis/ultis.js";
const form = document.querySelector('.new-topic-border form');
const mainSection = document.querySelector('main')
export const div = createElements('main', '','topic-container')
export async function createTopic(e) {
    e.preventDefault();
    console.log(e.target)
    if (e.submitter.textContent === 'Post') {
        const formData = new FormData(e.target)
        const body = {
            title: formData.get('topicName'),
            username: formData.get('username'),
            content: formData.get('postText')
        }
        await POST('collections/myboard/posts', body)
        debugger;
    }
    form.reset();
    loadTopic()
}
export async function loadTopic(e) {
    const data = await GET('collections/myboard/posts')
    const fragment = new DocumentFragment()
    div.innerHTML = ''
    Object.values(data).forEach(value => {
        div.innerHTML +=
    `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
            <h2 id = ${value._id}>${value.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${`2020-10-10T12:08:28.451Z`}</time></p>
                    <div class="nick-name">
                    <p>Username: <span>${value.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    fragment.appendChild(div)
    })
    mainSection.appendChild(fragment)
}