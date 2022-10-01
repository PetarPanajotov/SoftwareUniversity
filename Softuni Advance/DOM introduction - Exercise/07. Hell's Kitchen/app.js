function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantObj = {}
      let bestRestaurantArr = [];
      let inputs = JSON.parse(document.getElementById('inputs').children[1].value);
      let salarySort = []
      for (let input of inputs) {
         let splittedInput = input.split(" - ");
         let restaurantName = splittedInput.shift()
         if (!restaurantObj.hasOwnProperty(restaurantName)) {
         restaurantObj[restaurantName] = {}
         }
         let workers = splittedInput.shift().split(", ")
         workers = workers.join(" ").split(" ")
         for (let i = 0; i < workers.length; i+=2) { 
               restaurantObj[restaurantName][workers[i]] = Number(workers[i+1]);
         }
      }
      for (let value of Object.entries(restaurantObj)) {
         let avarageMoney = 0;
         let counter = 0;
         for(let money of Object.values(value[1])) {
            counter++;
            money = Number(money);
            avarageMoney += money;
         }
         avarageMoney = avarageMoney / counter;
         bestRestaurantArr.push([value[0], avarageMoney]);
      }
      bestRestaurantArr = bestRestaurantArr.sort((a, b) => b[1]-a[1]);
      for (let entry of Object.entries(restaurantObj[bestRestaurantArr[0][0]])) {
         salarySort.push(entry);
      }
      salarySort = salarySort.sort((a,b) => b[1] - a[1]); 
      const [bestName, avarageSalary] = bestRestaurantArr[0];
      const money = Number(salarySort[0][1]);
      let bestRestaurantText = `Name: ${bestName} Average Salary: ${avarageSalary.toFixed(2)} Best Salary: ${money.toFixed(2)}`
      let salaryPerPerson = '';
      for (let [name, salary] of salarySort) {
         salaryPerPerson += `Name: ${name} With Salary: ${salary} `
      }
      document.querySelector('#outputs #bestRestaurant p').innerText = bestRestaurantText;
      document.querySelector('#outputs #workers p').innerText = salaryPerPerson;
   }  
}