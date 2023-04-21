const phonebook = document.getElementById('phonebook');
const loadBtn = document.getElementById('btnLoad');
const personCreate = document.getElementById('person');
const phoneCreate = document.getElementById('phone');
const createBtn = document.getElementById('btnCreate');
const url = "http://localhost:3030/jsonstore/phonebook"

function attachEvents() {
    loadBtn.addEventListener('click', loadContants)
    createBtn.addEventListener('click', createContact)
}
async function loadContants(e) {
    phonebook.innerHTML = ''
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(value => {
        const { person, phone, _id } = value;
        renderPhoneBook(person, phone, _id)
    })
}

async function createContact(e) {
    const data = {
        person: personCreate.value,
        phone: phoneCreate.value
    }
    personCreate.value = '';
    phoneCreate.value = '';
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    loadContants()
}
async function deleteContent(e) {
    await fetch(url + `/${e.currentTarget.id}`, {
        method: 'DELETE'
    })
    loadContants()
}

function renderPhoneBook(person, phone, id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('id', id)
    deleteBtn.addEventListener('click', deleteContent)

    const li = document.createElement('li');
    li.textContent = `${person}: ${phone}`;

    li.appendChild(deleteBtn);
    phonebook.appendChild(li);
}
attachEvents();