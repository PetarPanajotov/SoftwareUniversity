// You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
function lowestPricesInCity(arr) {
    let result = {};
    for (let index of arr) {
        let boolean = true;
        let splitted = index.split(' | ');
        let [town, product, price] = splitted;
        price = Number(price);
        if (result.hasOwnProperty(product)) {
            let previous = result[product].price;
            boolean = false;
            if (previous > price) {
               boolean = true;
            }
        }
        if(boolean) {
            result[product] = {
                price: price,
                town: town
            }
        }
    }
    for(let entries of Object.entries(result)) { 
        let values = Object.values(entries[1]);
        console.log(`${entries[0]} -> ${values[0]} (${values[1]})`);
    }
}
lowestPricesInCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);