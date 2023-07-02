function phoneBook(arr) {
    let information = {};

    for(let index of arr) {
        let [name, phoneNumber] = index.split(" ");
        information[name] = phoneNumber
    }
    for(let key in information) {
        console.log(key, "->", information[key])
    }
}
phoneBook(['George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344'])