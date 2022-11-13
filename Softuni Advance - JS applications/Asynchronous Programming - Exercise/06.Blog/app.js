const url = 'http://localhost:3030/jsonstore/blog';
const btnLoad = document.getElementById('btnLoadPosts');
const btnView = document.getElementById('btnViewPost');
const postsSelect = document.getElementById('posts');
const postComments = document.getElementById('post-comments');
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
let tempObj = {};
attachEvents();
function attachEvents() {
    btnLoad.addEventListener('click', getPosts)
    btnView.addEventListener('click', getView)
}
async function getPosts(e) {
    const response = await fetch(url + '/posts');
    const data = await response.json();
    postsSelect.innerHTML = '';
    Object.values(data).forEach(element => {
        let {title, id, body} = element;
        tempObj[id] = body;
        createOptions(title, id);
    });
}
async function getView(e) {
    let id = postsSelect.value
    const response = await fetch(url + `/comments`);
    const data = await response.json()
    postComments.innerHTML = ''; //clearing comments
    let selectedOption = document.querySelector(`[value = ${id}]`);
    postTitle.textContent = selectedOption.textContent;
    postBody.textContent = tempObj[id];
    Object.values(data).forEach(element => {
        let {postId} = element;
        if(postId === id) {
            let {text} = element;
            let commentId = element.id;
            renderComments(text, commentId, id);
        }  
    });
}
function createOptions(title, id) {
    let option = createElements('option', title);
    option.setAttribute('value', id);
    postsSelect.appendChild(option);
}
function renderComments(commentText, commentId) {
    let li = createElements('li', commentText, "", commentId);
    postComments.appendChild(li);
}
//function for creating an element instead of using document.createElement
function createElements(type, text, className, idEl) {
    let result = document.createElement(type);
    result.textContent = text;
    if (className) {
        result.classList = className;
    }
    if(idEl) {
        result.setAttribute('id', idEl);
    }
    return result;
}