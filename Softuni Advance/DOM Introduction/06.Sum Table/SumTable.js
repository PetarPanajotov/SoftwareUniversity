// Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "sum".

// Input/Output

// There will be no input/output, your program should instead modify the DOM of the given HTML document.
function sumTable() {
    let price = document.querySelectorAll('table tr');
    let sum = 0;
    let total = document.getElementById('sum')
    for (let i = 1; i < price.length; i++) {
        let column = price[i].children;
        let cost = column[column.length-1].textContent
        sum += Number(cost)
    }
    total.textContent = sum;
    debugger;
}