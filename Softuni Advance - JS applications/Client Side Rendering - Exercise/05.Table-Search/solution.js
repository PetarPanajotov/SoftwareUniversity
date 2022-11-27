import { html, render } from './node_modules/lit-html/lit-html.js'
// import { map } from './nde_modules/lit-html/directives/map.js'o

window.addEventListener('load', solve)
async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const root = document.querySelector('tbody');
   const url = 'http://localhost:3030/jsonstore/advanced/table'
   const input = document.querySelector('input');
   const response = await fetch(url,
      {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      });
   const data = await response.json();
   const values = Object.values(data);
   const tableTemplate = html`
         ${map(values, (value) => html`
         <tr>
            <td>${value.firstName} ${value.lastName}</td>
            <td>${value.email}</td>
            <td>${value.course}</td>
         </tr>`)}`;
   render(tableTemplate, root);
   function onClick() {
      const allTableRows = [...document.querySelectorAll('tbody tr')];
      const inputToLowerCase = input.value.toLowerCase();
      for (let currentRow of allTableRows) {
         currentRow.classList.remove('select')
         const currentRowToLowerCase = currentRow.textContent.toLowerCase();
         if (currentRowToLowerCase.includes(inputToLowerCase) && inputToLowerCase !== '') {
            currentRow.classList = 'select';
         }
      }
      input.value = '';
   }
}