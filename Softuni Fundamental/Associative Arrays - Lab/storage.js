function storage(arr) {
    let storageInformation = new Map();
    for(let index of arr) {
        let [product, quantity] = index.split(" ")
        if (storageInformation.has(product)) {
            let oldQuantity = Number(storageInformation.get(product))
            storageInformation.set(product, Number(quantity)+oldQuantity)
        } else {
            storageInformation.set(product, quantity)
        }
    }
    for(let [key, value] of storageInformation) {
        console.log(`${key} -> ${value}`)
    }
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])