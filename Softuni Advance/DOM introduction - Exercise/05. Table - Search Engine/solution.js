function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let nameList = Array.from(document.querySelectorAll('tbody tr'));
      debugger;
      let search = document.getElementById('searchField');
      for (let index of nameList) {
         if (index.className !== "") {
            index.className = ""
         }
      }
      for (let currentRow of nameList) {
         if (currentRow.innerText.includes(search.value) && search.value != '') {
             currentRow.className = "select";
         }
     }
   }
}