const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');
const messages = document.getElementById('messages');
const contentInput = document.querySelector('[name = "content"]')
const authorInput = document.querySelector('[name = "author"]')
const url =  "http://localhost:3030/jsonstore/messenger"
function attachEvents() {
    refreshBtn.addEventListener('click', getMessages)
    submitBtn.addEventListener('click', sendMessage)
}
async function getMessages(e) {
    let buffer = '';
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(value => {
        let { author, content } = value;
        buffer += `${author}: ${content}\n`
    })
    buffer = buffer.substring(0, buffer.length - 1)
    messages.innerHTML = buffer
}
async function sendMessage(e) {
    const data = {
        author: authorInput.value,
        content: contentInput.value
    };
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}
attachEvents();