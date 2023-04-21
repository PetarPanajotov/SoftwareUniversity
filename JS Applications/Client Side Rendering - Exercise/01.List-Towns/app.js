import { html, render } from "./node_modules/lit-html/lit-html.js";
const root = document.getElementById('root');
const input = document.getElementById('towns');
const loadBtn = document.getElementById('btnLoadTowns');
loadBtn.addEventListener('click', listTowns)
function listTowns(e) {
    debugger;
    e.preventDefault()
    const towns = input.value.split(', ')
    let showList = towns.map(element => html`<ul>
    <li>${element}</li>
    </ul>`)
    render(showList, root);
}