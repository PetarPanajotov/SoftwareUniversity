const loadBtn = document.getElementById('loadBooks');
const tbody = document.getElementsByTagName('tbody')[0];
const titleInput = document.querySelector("[name = 'title']");
const authorInput = document.querySelector("[name = 'author']");
const submitBtn = document.querySelector('form button');
const form = document.getElementsByTagName('form')[0];
const saveBtn = document.createElement('button');
saveBtn.textContent = "Save";
submitBtn.textContent = 'Submit';
submitBtn.addEventListener('click', addBook);

loadBtn.addEventListener('click', loadBooks);
const url = 'http://localhost:3030/jsonstore/collections/books'

async function loadBooks() {
    saveBtn.remove()
    form.appendChild(submitBtn);
    tbody.innerHTML = '';
    form.querySelector('h3').textContent = 'FORM' 
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(value => {
        const { author, title, _id } = value
        renderBooks(author, title, _id)
    })
}
async function addBook(e) {
    e.preventDefault()
    if (!authorInput.value || !titleInput.value) {
        return
    }
    const data = {
        author: authorInput.value,
        title: titleInput.value
    }
    authorInput.value = '';
    titleInput.value = '';
    await fetch (url, {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(data)
    })
    loadBooks() 
}
async function editFilm(e) {
    const idEdit = e.target.parentElement.id
    const response = await fetch(url);
    const dataEdit = await response.json()
    const data = Object.values(dataEdit)
    const tempData = data.find(value => value._id == idEdit)
    const { author, title, _id} = tempData
    authorInput.value = author; 
    titleInput.value = title;
    form.querySelector('h3').textContent = 'Edit FORM' 
    submitBtn.remove();
    form.appendChild(saveBtn)
    saveBtn.addEventListener('click', putfnc)
    async function putfnc(e) {
        e.preventDefault()
        console.log(url + `/${_id}`)
        await fetch(url + `/${_id}`, {
            method: 'PUT',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                "author": authorInput.value,
                "title": titleInput.value,
                "_id": _id
            })
        })
        loadBooks();
    }
}
async function deleteFilm(e) {
    const id = e.currentTarget.parentElement.id
    await fetch(url + `/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': "application/json"}
    })
    loadBooks();
}
function renderBooks(author, title, id) {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    tdTitle.textContent = title;
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = author;
    const tdButtons = document.createElement('td')
    tdButtons.setAttribute('id', id)
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', editFilm)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', deleteFilm)
    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(deleteBtn);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr)
}