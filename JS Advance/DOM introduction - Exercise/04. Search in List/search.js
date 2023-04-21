function search() {
   let towns = Array.from(document.querySelectorAll('ul li'));
   let search = document.getElementById('searchText').value;
   let counter = 0;
   for(let town of towns) {
      let text = town.textContent;

      if ((text).includes(search)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration =  "underline";
         counter++;
      } else {
         town.style.fontWeight = "";
         town.style.textDecoration =  "none";
      }
   }
   document.getElementById('result').innerText = `${counter} matches found`
}
