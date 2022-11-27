import { html, render } from "./node_modules/lit-html/lit-html.js";
import { repeat } from "./node_modules/lit-html/directives/repeat.js"
import { towns } from "./towns.js";
const root = document.getElementById('towns');
const searchBtn = document.getElementsByTagName('button')[0];
const result = document.getElementById('result');
const input = document.getElementById('searchText')
window.addEventListener('load', search)
function search() {
   const template =   html`  
    <ul>
       ${repeat(towns, (town) => html`<li> ${town} </li>`)}
   </ul>`;
   render(template, root);
   searchBtn.addEventListener('click', searchTowns)
}

function  searchTowns(e) {
   const li = [...document.getElementsByTagName('li')];
   let counter = 0;
   let temp = html `<p>${counter} matches found</p>`;
   li.forEach(el => {
      if(el.textContent.includes(input.value) && input.value !== '') {
         el.classList = 'active';
         temp = html `<p>${++counter} matches found</p>`;
      } else {
         el.classList.remove('active');
      }
   })
   render(temp, result);
}