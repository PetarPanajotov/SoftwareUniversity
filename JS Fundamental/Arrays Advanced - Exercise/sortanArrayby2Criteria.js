function sortanArrayby2Criteria(arr) {
    let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    sorted.forEach(element => {
        console.log(element) 
    });
}   
sortanArrayby2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
