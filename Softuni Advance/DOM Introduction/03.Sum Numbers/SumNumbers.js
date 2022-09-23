// Write a JS function that reads two numbers from input fields in a web page and puts their sum in another field when the user clicks on a button.

// Input/Output

// There will be no input/output, your program should instead modify the DOM of the given HTML document.
function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let sum = document.getElementById('sum')

    sum.value = num1 + num2
}
