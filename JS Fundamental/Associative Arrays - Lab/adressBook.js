function adressBook(arr) {
    let information = {};
    let unsortArr = [];
    for(let index of arr) {
        let [name, adress] = index.split(":");
        information[name] = adress;
    }
    for (let index of Object.entries(information)) {
        unsortArr.push(index)
    }
    let sortArr = unsortArr.sort(([nameA, adressA], [nameB, adressB]) => nameA.localeCompare(nameB))
    for(let index of sortArr) {
        console.log(index[0], "->", index[1])
    }
}
adressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])
console.log("------------------------")
adressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])