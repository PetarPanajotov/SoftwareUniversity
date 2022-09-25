function solve() {
  debugger;
  let text = document.getElementById('text').value;
  let convection = document.getElementById('naming-convention').value;
  let res = document.getElementById('result');
  let textArr = text.split(" ");
  let result = '';
  let obj = {
    "Camel Case": function (input) {
      input.forEach((el, index) => {
        if (index === 0) {
          result += el.toLowerCase();
        } else {
          result += el[0].toUpperCase() + el.substring(1).toLowerCase();
        }
      }
      )
      return result;
    },
    "Pascal Case": function (input) {
      input.forEach((el, index) => {
        result += el[0].toUpperCase() + el.substring(1).toLowerCase();
      }
      )
      return result;
    }
  }
  if (obj.hasOwnProperty(convection)) {
    result = obj[convection](textArr);
    res.innerText = result;
  } else {
    res.innerText = 'Error!';
  }
}