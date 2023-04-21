function solve() {
  let buttons = document.querySelectorAll('#container #exercise button')
  buttons[0].addEventListener('click', function () {
    let input = document.querySelector('#container #exercise textarea')
    let parseInput = JSON.parse(input.value);
    for(let objectInfo of parseInput) {
    let tableD = document.querySelector('.table tbody')
    let tr = document.createElement('tr')
    tableD.appendChild(tr)
    //Add image
    let newtd = document.createElement('td')
    let newImg = document.createElement('img')
    newImg.src = objectInfo.img
    newtd.appendChild(newImg)
    tr.appendChild(newtd)
    //Add name
    newtd = document.createElement('td')
    let newName = document.createElement('p');
    newName.textContent = objectInfo.name;
    newtd.appendChild(newName)
    tr.appendChild(newtd);
    //Add price
    newtd = document.createElement('td')
    let newPrice = document.createElement('p');
    newPrice.textContent = objectInfo.price;
    newtd.appendChild(newPrice)
    tr.appendChild(newtd);
    //Add decoration factor
    newtd = document.createElement('td')
    let newDecorationFactor = document.createElement('p');
    newDecorationFactor.textContent = objectInfo.decFactor;
    newtd.appendChild(newDecorationFactor)
    tr.appendChild(newtd)
    //Add checkbox
    newtd = document.createElement('td')
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox';
    newtd.appendChild(checkBox);
    tr.appendChild(newtd);
    }
  })
  buttons[1].addEventListener('click', function() {
    let tableD = document.querySelectorAll('.table tbody tr');
    let nameArr = [];
    let totalPrice = 0;
    let decoration = 0;
    let counter = 0;
    let result = ""
    for (let index of tableD) {
      let isitChecked = index.children[4].lastChild
      if (isitChecked.checked) {
      console.log(index.children[1].lastChild.textContent)
      nameArr.push(index.children[1].lastChild.textContent);
      totalPrice += Number(index.children[2].lastChild.textContent);
      decoration += Number(index.children[3].lastChild.textContent);
      counter++;
      }
    }
    decoration /= counter;
    result += `Bought furniture: ${nameArr.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decoration}`
    document.querySelectorAll('#container #exercise textarea')[1].value = result;
  })
}