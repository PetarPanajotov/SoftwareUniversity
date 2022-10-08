function addItem() {
    let input = document.getElementById('newItemText').value;
    if (input.length !== 0) {
        let node = document.getElementById('items');
        let li = document.createElement('li')
        node.appendChild(li).textContent = input;
    }
    let children = document.querySelector('#items').lastChild
    let deleteEl = document.createElement('a');    
    children.appendChild(deleteEl).textContent = '[Delete]';
    deleteEl.href = '#'
    (children.children[0]).addEventListener('click', function() {
        children.remove();
    })
}
