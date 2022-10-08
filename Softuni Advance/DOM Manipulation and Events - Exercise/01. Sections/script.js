function create(words) {
   let getDiv = document.getElementById('content')
   for (let word of words) {
      let p = document.createElement('p');
      let createDiv = document.createElement('div');
      p.innerText = word;
      p.style.display = 'none'
      createDiv.appendChild(p);
      createDiv.addEventListener('click', function() {
         p.style.display = ""
      })
      getDiv.appendChild(createDiv);
   } 
}