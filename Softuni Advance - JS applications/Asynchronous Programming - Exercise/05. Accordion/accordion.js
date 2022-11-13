const url = 'http://localhost:3030/jsonstore/advanced/articles';
const mainSection = document.getElementById('main');

async function gethead() {
    const response = await fetch(url + `/list`)
    const data = await response.json()
    data.forEach(element => {
        let {_id, title} = element
        render(_id, title)
    });
}
function solution() {
    gethead()
}
async function getDetails(e) {
    const btnId = e.currentTarget.id;
    const divAccordion = e.currentTarget.parentElement.parentElement;
    const response = await fetch(url + `/details/${btnId}`)
    const data = await response.json()
    let {content} = data;
    const divExtra = createElements('div', '', 'extra');
    const p = createElements('p', content);
    divExtra.style.display = 'block'
    divExtra.appendChild(p);
    if (e.target.innerText === 'MORE') {
        divAccordion.appendChild(divExtra);
        e.target.innerText = 'LESS';
        return
    } else if (e.target.innerText = 'LESS') {
        e.target.innerText = 'MORE';
        divAccordion.lastChild.remove()
    }       
}
function createElements(type, text, classN, idEl) {
    let result = document.createElement(type);
    result.textContent = text;
    if (classN) {
        result.classList = classN;
    }
    if(idEl) {
        result.setAttribute('id', idEl)
    }
    return result
}
function render(id, title) {
    const divAccordion = createElements('div', '','accordion');
    const divHead = createElements('div', '', 'head');
    const span = createElements('span', title);
    const button = createElements('button', 'More', 'button', id);
    button.addEventListener('click', getDetails);
    divHead.appendChild(span);
    divHead.appendChild(button);
    divAccordion.appendChild(divHead);
    mainSection.appendChild(divAccordion);
}
solution()