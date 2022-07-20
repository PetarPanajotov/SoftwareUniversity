function aMinterTask(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let quantity = Number(arr[i+1]);
        if(obj.hasOwnProperty(name)) {
            let oldquantity = obj[name];
            obj[name] = oldquantity + quantity;
        }
        else {
            obj[name] = quantity
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }
}
aMinterTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])