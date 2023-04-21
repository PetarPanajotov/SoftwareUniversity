import { GET, POST } from "./api.js";
import { createElements } from "./ultis/ultis.js";

const container = document.getElementsByClassName('container')[0]
const main = document.getElementsByTagName('main')[0]
const commentDiv = createElements('div', '', 'theme-content')
let fragment = new DocumentFragment()
export async function loadContent(e) {
    e.preventDefault();
    if (e.target.tagName == "H2") {
        main.remove()
        const id = e.target.id;
        const data = await GET(`collections/myboard/posts/${id}`)
        commentDiv.innerHTML = 
        `<div class="theme-content">
            <!-- theme-title  -->
            <div class="theme-title">
                <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2 id = ${id}>${data.title}</h2>

                    </div>

                </div>
            </div>
            <!-- comment  -->
            <div class="comment">
                <div class="header">
                <img src="./static/profile.png" alt="avatar">
                <p><span>${data.username}</span> posted on <time>2020-10-10 12:08:28</time></p>
                <p class="post-content">${data.content}</p>
                </div>
                
            </div>
            <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        </div>`
        fragment.append(commentDiv);
        container.appendChild(fragment)
        debugger;
        const form = container.getElementsByTagName('form')[0];
        form.addEventListener('submit', createComment)
    }
}
async function createComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const body = {
        text: formData.get('postText'),
        username: formData.get('username'),
        postID: document.querySelector('.theme-name h2').id
    }
    const data = await POST('collections/myboard/comments', body)
    const postID = Object.values(data)[3]
        const divUserComment = createElements('div', '', 'user-comment')
        const comment = container.getElementsByClassName('comment')[0]
        divUserComment.innerHTML = `
        <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${Object.values(data)[1]}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
            <div class="post-content">
                <p>${Object.values(data)[0]}</p>
            </div>
        </div>
    </div>`
    await comment.appendChild(divUserComment)
}