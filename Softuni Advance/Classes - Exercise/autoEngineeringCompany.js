function engineerCompany(arrCars) {
    let carMap = new Map();
    for(let car of arrCars) {
        let [carBrand, carModel, carQuantity] = car.split(" | ")
        carQuantity = Number(carQuantity)
        if (!carMap.has(carBrand)) {
            carMap.set(carBrand, {[carModel]: carQuantity})
        } else {
            let newCar = carMap.get(carBrand)
            if (newCar.hasOwnProperty(carModel)) {
                newCar[carModel] += carQuantity
            }  else {
                newCar[carModel] = carQuantity;
            }
            carMap.set(carBrand, newCar)
        }

    }
    for (let index of carMap) {
        console.log(index[0])
        let entries = Object.entries(index[1])
        for (let entry of entries) {
            console.log(`###${entry.join(' -> ')}`)
        }
    }
}
engineerCompany(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])