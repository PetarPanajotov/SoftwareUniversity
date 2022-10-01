function generateReport() {
    let inputs = Array.from(document.querySelectorAll('th input'));
    let tableRows = Array.from(document.querySelectorAll('tbody tr'))
    let columnCounter = {}
    let counter = 0;
    let tempObj = {};
    let arrayNames = []
    let result = []
    for (let index of inputs) {
        columnCounter[index.name] = counter;
        counter++
    }
    for (let index of inputs) {
        if (index.checked) {
            arrayNames.push(index.name)
            tempObj[index.name] = ""
        }
    }
    for (let row of tableRows) {
        for (let i = 0; i < arrayNames.length; i++) {
            tempObj[arrayNames[i]] = row.children[columnCounter[arrayNames[i]]].textContent;
        }
        result.push(tempObj)
        tempObj = {}
    }
    document.getElementById('output').value = JSON.stringify(result);
}
