import { cats } from "./catSeeder.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"
const section = document.getElementById('allCats')
function showCats() {
    const ul = document.createElement('ul')
    const renderCat = cats.map(cat => html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click = "${toggle}">Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
        `)
        render(renderCat, ul);
        render(ul, section)
}
function toggle(e) {
    if(e.target.textContent === 'Hide status code') {
        e.target.textContent = 'Show status code'
        e.target.nextElementSibling.style.display = 'none'
        return;
    }
    e.target.nextElementSibling.style.display = 'block'
    e.target.textContent = 'Hide status code'
}
showCats()