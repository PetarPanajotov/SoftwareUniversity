window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  let publishBtn = document.getElementById('form-btn');
  let previewList = document.getElementById('preview-list');
  let mainDiv = document.getElementById('main')

  function createElements(type, text, classN) {
    let result = document.createElement(type);
    result.textContent = text;
    if (classN) {
      result.classList = classN;
    }
    return result
  }
  publishBtn.addEventListener('click', addStory)
  function addStory(e) {
    debugger
    if (!firstName.value || !lastName.value || !age.value || !storyTitle.value || !story.value) {
      return;
    }
    let li = createElements("li", "", "story-info");
    let article = document.createElement("article");
    let h4 = createElements("h4", `Name: ${firstName.value} ${lastName.value}`);
    let pAge = createElements('p', `Age: ${age.value}`);
    let pTitle = createElements('p', `Title: ${storyTitle.value}`);
    let pGenre = createElements('p', `Genre: ${genre.value}`);
    let pStory = createElements('p', story.value);
    let saveBtn = createElements('button', "Save Story", 'save-btn');
    let editBtn = createElements('button', "Edit Story", "edit-btn");
    let deleteBtn = createElements('button', "Delete Story", "delete-btn")
    article.appendChild(h4)
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    previewList.appendChild(li);
    publishBtn.disabled = true;
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    story.value = "";
    editBtn.addEventListener('click', edit)
    saveBtn.addEventListener('click', save)
    deleteBtn.addEventListener('click', deleteStory);
  }
  function edit(e) {
    let info = e.currentTarget.parentElement.children[0]
    let namesEdit = info.children[0].textContent
    namesEdit = namesEdit.replace('Name: ', "")
    let [firstNameEdit, lastNameEdit] = namesEdit.split(' ')
    firstName.value = firstNameEdit;
    lastName.value = lastNameEdit;
    let ageEdit = info.children[1].textContent;
    age.value = ageEdit.replace('Age: ', "")
    let titleEdit = info.children[2].textContent;
    storyTitle.value = titleEdit.replace('Title: ', "");
    let storyEdit = info.children[4].textContent;
    story.value = storyEdit;
    publishBtn.disabled = false;
    e.currentTarget.parentElement.remove()
  }
  function save(e) {
    Array.from(mainDiv.children).forEach(el => {
      el.remove()
    })
    let h1 = createElements('h1', "Your scary story is saved!")
    mainDiv.appendChild(h1);
    debugger;
  }
  function deleteStory(e) {
    e.currentTarget.parentElement.remove();
    publishBtn.disabled = false;
  }
}
