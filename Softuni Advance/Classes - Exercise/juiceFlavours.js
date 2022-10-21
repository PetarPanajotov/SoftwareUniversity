function juiceFlavours(arr) {
    let quantityMap = new Map()
    let bottlesMap = new Map()
    for(let index of arr) {
        let [flavour, quantity] = index.split(' => ');
        quantity = Number(quantity)

        if (quantityMap.has(flavour)) {
            let newQuantity = quantityMap.get(flavour) + quantity;
            quantityMap.set(flavour, newQuantity)
        } else {
            quantityMap.set(flavour, quantity)
        }
        let isThereEnoughQuantity = quantityMap.get(flavour)
        let bottle = Math.floor(isThereEnoughQuantity / 1000);
        if (bottle >= 1) {
            let remainingQunatity = isThereEnoughQuantity % 1000;
            quantityMap.set(flavour, remainingQunatity)
            if (bottlesMap.has(flavour)) {
                let newBottles = bottlesMap.get(flavour) + bottle;
                bottlesMap.set(flavour, newBottles)
            } else {
                bottlesMap.set(flavour, bottle)
            }
        }
    }
    for (let current of bottlesMap) {
        console.log(current.join(" => "))
    }
}
juiceFlavours(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])