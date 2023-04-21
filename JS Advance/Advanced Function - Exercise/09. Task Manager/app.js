function solve() {
    let open = document.getElementsByTagName('section')[1];
    let inProgress = document.getElementsByTagName('section')[2];
    let finished = document.getElementsByTagName('section')[3];
    let btnAdd = document.getElementById('add');
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    
    btnAdd.addEventListener('click', function(event) {
        event.preventDefault();
        if (!task.value || !description.value || !date.value) {
            return
        }
            let article = document.createElement('article');
            let h3 = createElements('h3', task.value);
            let p1 = createElements('p', "Description: " + description.value);
            let p2 = createElements('p', "Due Date: " + date.value);
            let div = createElements('div', "", "flex");
            let greenBtn = createElements('button', "Start", "green");
            let redBtn = createElements('button', "Delete", "red");
            div.appendChild(greenBtn);
            div.appendChild(redBtn);

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(div);
            open.children[1].appendChild(article);
            task.value = '';
            description.value = '';
            date.value = '';
            redBtn.addEventListener("click", function() {
                article.remove()
            })

            greenBtn.addEventListener('click', function() {
                inProgress.children[1].appendChild(article)
                let yellowBtn = redBtn;
                let deleteBtn = greenBtn;
                deleteBtn.addEventListener('click', function() {
                    article.remove()
                })
                yellowBtn.classList = "orange"
                yellowBtn.textContent = "Finish"

                deleteBtn.classList = "red"
                deleteBtn.textContent = "Delete"
                yellowBtn.addEventListener('click', function() {
                     finished.children[1].appendChild(article)
                     let remove = finished.children[1].lastChild;
                     remove.removeChild(remove.lastChild)
                })
            })
    })
    function createElements(type, text, classN) {
        let result = document.createElement(type);
        result.textContent = text;
        if (classN) {
            result.classList = classN
        }
        return result
    }
}