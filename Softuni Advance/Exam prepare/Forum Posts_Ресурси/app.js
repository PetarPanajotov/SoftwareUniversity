window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let publishBtn = document.getElementById('publish-btn');
  let review = document.getElementById('review-list');
  let uploadedPosts = document.getElementById('published-list');
  let clearBtn = document.getElementById('clear-btn');

  function createElements(type, text, classN) {
    let result = document.createElement(type);
    result.textContent = text;
    if (classN) {
      result.classList = classN;
    }
    return result
  }
  
  publishBtn.addEventListener('click', postReview);
  clearBtn.addEventListener('click', clear)
  
  function postReview(e) {
    if (!title.value || !category.value || !content.value) {
      return;
    }
    let article = document.createElement('article');
    let li = createElements("li", "", "rpost");
    let h4 = createElements("h4", title.value);
    let pCategory = createElements("p", `Category: ${category.value}`);
    let pContent = createElements("p", `Content: ${content.value}`);
    let editBtn = createElements("button", "Edit", "action-btn edit");
    let approveBtn = createElements("button", "Approve", "action-btn approve");
    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);
    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);
    review.appendChild(li);
    title.value = "";
    category.value = "";
    content.value = ""
    editBtn.addEventListener('click', edit)
    approveBtn.addEventListener('click', approve)
  }
  function edit(e) {
    title.value = e.currentTarget.parentElement.getElementsByTagName('h4')[0].textContent;
    category.value = e.currentTarget.parentElement.getElementsByTagName('p')[0].textContent.replace("Category: ", "");
    content.value = e.currentTarget.parentElement.getElementsByTagName('p')[1].textContent.replace("Content: ", "");
    debugger;
    e.currentTarget.parentElement.remove();
  }
  function approve(e) {
    debugger;
    let current = e.currentTarget.parentElement;
    uploadedPosts.appendChild(current);
    uploadedPosts.querySelectorAll('button')[0].remove();
    uploadedPosts.querySelectorAll('button')[0].remove();
  }
  function clear(e) {
    Array.from(uploadedPosts.getElementsByClassName('rpost')).forEach((el) => {
      el.remove()
    })
  }
}
