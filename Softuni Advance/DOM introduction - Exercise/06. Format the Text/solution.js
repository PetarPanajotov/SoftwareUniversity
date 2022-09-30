function solve() {
  let input = document.getElementById('input');
  input.value = (input.value).trimEnd();
  input.value = (input.value).substring(0, (input.value).length-1)
  let inputArr = (input.value.trimEnd()).split('.');
  let result = ""
  debugger;
  for(let i = 0; i < inputArr.length; i+=3) {
    document.getElementById('output').appendChild(document.createElement('p'));
    for (let j = i; j < i+3; j++) {
      if (inputArr[j]) {
      result+= inputArr[j] + '. '
      }
    }
    if(i >= inputArr.length - 3) {
      result = result.substring(0, result.length-1)
    }
    document.getElementById('output').lastChild.innerText = result;
    result = "";
  }
}