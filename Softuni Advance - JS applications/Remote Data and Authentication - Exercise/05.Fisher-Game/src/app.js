const logout = document.getElementById('logout')
const loadBtn = document.querySelector('.load')
const catches = document.querySelector('.catch')
const divCatch = document.getElementById('catches')
const addForm = document.getElementById('addForm')
catches.remove()

window.addEventListener('load', toggleLoginRegister)
logout.addEventListener('click', onlogout)
loadBtn.addEventListener('click', loadList)
addForm.addEventListener('submit', addCatch)
logout.style.display = 'none'
const endPoints = {
    logout: 'users/logout',
    list: 'data/catches',
    create: 'data/catches',
    update: 'data/catches/',
    delete: 'data/catches/'
}

async function onlogout() {
    const token = sessionStorage.getItem('accessToken');
    const response = await GET(endPoints.logout, token)
    if (response.status == 204) {
        sessionStorage.clear()
        toggleLoginRegister()
    }
}

function toggleLoginRegister() {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
        document.getElementById('logout').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
        document.getElementById('user').style.display = 'inline-block';
        document.getElementsByClassName('add')[0].disabled = '';
        document.querySelector('.email span').textContent = sessionStorage.getItem('email')
    } else {
        document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none';
        document.getElementsByClassName('add')[0].disabled = 'true';
        document.querySelector('.email span').textContent = 'guest'
    }
}

async function loadList() {
    divCatch.innerHTML = '';
    const response = await GET(endPoints.list);
    const data = await response.json();
    Object.values(data).forEach(value => {
        let catchesTemplate = catches.cloneNode('deep')
        const inputs = catchesTemplate.getElementsByTagName('input');
        const [angler, weight, species, location, bait, captureTime] = inputs;
        const buttons = catchesTemplate.getElementsByTagName('button');
        angler.value = value.angler;
        weight.value = value.weight;
        species.value = value.species;
        location.value = value.location;
        bait.value = value.bait;
        captureTime.value = value.captureTime;
        buttons[0].setAttribute('data-id', value._id);
        buttons[1].setAttribute('data-id', value._id);
        buttons[0].addEventListener('click', updateCatch)
        buttons[1].addEventListener('click', deleteCatch)
        if (sessionStorage.id == value._ownerId) {
            [...inputs].forEach(input => input.disabled = '');
            [...buttons].forEach(button => button.disabled = '')
        } else {
            [...inputs].forEach(input => input.disabled = 'true');
            [...buttons].forEach(button => button.disabled = 'true')
        }
        divCatch.appendChild(catchesTemplate)
    })
}
async function updateCatch(e) {
    const id = e.target.dataset.id;
    const token = sessionStorage.getItem('accessToken');
    const inputs = e.target.parentElement.getElementsByTagName('input') 
    const [angler, weight, species, location, bait, captureTime] = inputs;
    const body = {
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value,
    }
    const response = await PUT(endPoints.update + id, token, body);
    const data = await response.json()
}

async function deleteCatch(e) {
    const id = e.target.dataset.id;
    const token = sessionStorage.getItem('accessToken');
    const response = await DELETE(endPoints.delete + id, token);
    const data = await response.json();
    loadList()

}
async function addCatch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const token = sessionStorage.getItem('accessToken');
    const body = Object.fromEntries(formData.entries());
    const response = POST(endPoints.create, token, body);
    addForm.reset();
    loadList();
}

async function api(method, url, token, body) {
    const responseOptions =  {
        method: `${method}`,
        headers: {
        'Content-Type': 'application/json'
        }
    }
    if (body) {
        responseOptions['body'] = JSON.stringify(body);
    }
    if (token) {
        responseOptions.headers['X-Authorization'] = token;
    }
    const response = await fetch('http://localhost:3030/' + url, responseOptions);
    return response
}
const GET = api.bind(null, 'GET');
const POST = api.bind(null, 'POST');
const PUT = api.bind(null, 'PUT');
const DELETE =  api.bind(null, 'DELETE');