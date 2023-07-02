function schoolGrades(arr) {
    let myMap = new Map();
    let sum = 0
    for (let index of arr) {
        index = index.split(" ");
        let name = index.shift();
        let grades = index;
        if(!myMap.has(name)) {
            myMap.set(name, grades);
        } else {
            let oldGrades = myMap.get(name)
            for(let i of grades) {
                oldGrades.push(i);
            }
            myMap.set(name, oldGrades);
        }
    }
    for (let [name, key] of myMap) {
        for (let grade of key) {
            grade = Number(grade);
            sum += grade   
        }
        let avarage = sum / key.length
        myMap.set(name, avarage);
        sum = 0
    }
    let sort = Array.from(myMap.entries()).sort((a, b) => a[0].localeCompare(b[0]))
    for(let index of sort) {
        console.log(`${index[0]}: ${index[1].toFixed(2)}` )
    }
}
schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6',
'Tim 6 5'])