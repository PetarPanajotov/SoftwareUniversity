const main = document.querySelector('body main')
main.innerHTML = ''
async function recipesCreation() {
    const response = await fetch(`http://localhost:3030/jsonstore/cookbook/recipes`);
    const data = Object.values(await response.json());
    
    for (let element of data) {
        let article = document.createElement('article');
        article.classList.add('preview', `${element._id}`)
        let divTitle = document.createElement('div');
        divTitle.classList = 'title'
        let h2 = document.createElement('h2')
        h2.textContent = element.name
        divTitle.appendChild(h2);
        article.appendChild(divTitle);
        let divSmall = document.createElement('div');
        divSmall.classList = 'small';
        let img = document.createElement('img');
        img.src = element.img;
        divSmall.appendChild(img);
        article.appendChild(divSmall);
        article.addEventListener('click', recipe)
        main.appendChild(article);
    }
}
async function recipe(e) {
    const currentId = e.currentTarget.classList[1];
    const response = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${currentId}`);
    const data = await response.json();
    let article = document.createElement('article');
    let h2 = document.createElement('h2')
    h2.textContent = data.name;
    article.appendChild(h2);
    let divBand = document.createElement('div');
    divBand.classList = 'band'
    let divThumb = document.createElement('div');
    divThumb.classList = 'thumb'
    let img = document.createElement('img');
    img.src = data.img;
    divThumb.appendChild(img);
    divBand.appendChild(divThumb);
    article.appendChild(divBand)
    let divIngr = document.createElement('div');
    divIngr.classList = 'ingredients'
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let keys = Object.keys(data.ingredients)
    for (let index of keys) {
        let li = document.createElement('li');
        li.textContent = data.ingredients[index];
        ul.appendChild(li)
    }
    divIngr.appendChild(h3);
    divIngr.appendChild(ul);
    divBand.appendChild(divIngr);
    let divDescription = document.createElement('div');
    divDescription.classList = 'description'
    let h3Desc = document.createElement('h3');
    h3Desc.textContent = 'Preparation'
    divDescription.appendChild(h3Desc);
    let stepKeys = Object.keys(data.steps);
    for (let index of stepKeys) {
        let p = document.createElement('p');
        p.textContent = data.steps[index];
        divDescription.appendChild(p)
    }
    article.appendChild(divDescription);
    let check = currentId.replace('0', "")
    check = Number(check-1);
    main.children[check].replaceWith(article)
}
recipesCreation()
