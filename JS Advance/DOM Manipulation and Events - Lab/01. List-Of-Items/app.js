function addItem() {
    let input = document.getElementById('newItemText').value;
    let node = document.getElementById('items');
    let li = document.createElement('li')
    node.appendChild(li).innerText = input
}