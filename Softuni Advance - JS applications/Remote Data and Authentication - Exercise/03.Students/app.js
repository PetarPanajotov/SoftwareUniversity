const submitBtnInput = document.getElementById('submit');
const firstNameInput = document.querySelector('[name = "firstName"]');
const lastNameInput = document.querySelector('[name = "lastName"]');
const facultyNumberInput = document.querySelector('[name = "facultyNumber"]');
const gradeInput = document.querySelector('[name = "grade"]');

const url = "http://localhost:3030/jsonstore/collections/students";
const tableBody = document.getElementsByTagName('tbody')[0];
window.addEventListener('load', getInfo)
submitBtnInput.addEventListener('click', createNewStudent)
async function getInfo(e) {
    tableBody.innerHTML = '';
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(value => {
        let tr = document.createElement('tr');
        const params = Object.keys(value);
        for(let i = 0; i < params.length-1; i++) {
            renderInfo(value[params[i]], tr);
        }
        tableBody.appendChild(tr)
    })
}

async function createNewStudent (e) {
    e.preventDefault()
    if (!firstNameInput.value || !lastNameInput.value || !facultyNumberInput.value || !gradeInput.value) {
        return
    }
    const data = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        facultyNumber: facultyNumberInput.value,
        grade: gradeInput.value
    }
    // firstNameInput.value = '';
    // lastNameInput.value = '';
    // facultyNumberInput.value = '';
    // gradeInput.value = '';

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    getInfo()
}

function renderInfo(current, tr) {
    const td = document.createElement('td');
    td.textContent =  current;
    tr.appendChild(td);
    return tr
}