import { render, html } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';
const menu = document.getElementById('menu');
const form = document.getElementsByTagName('form')[0];
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
form.addEventListener('submit', addItem);
loadItem()

async function loadItem() {
    const response = await fetch(url,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'} 
        })
    const data = await response.json();
    const values = Object.values(data);
    const template =  html`  
        ${repeat(values, (value) => html`<option value = ${value._id}> ${value.text} </option>`)}`;
    render(template, menu);
}

async function addItem(e) {
    e.preventDefault();
    const input = document.getElementById('itemText').value;
    debugger
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: input})
        });
    loadItem()
}